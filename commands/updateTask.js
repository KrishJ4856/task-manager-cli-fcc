// Importing packages and functions
import {connectDB, disconnectDB} from '../db/connectDB.js'
import inquirer from 'inquirer'
import Todos from '../schema/TodoSchema.js'
import ora from 'ora'
import chalk from 'chalk'

export default async function updateTask(){
    try {
        // Prompting the user to input the code of the todo to be updated
        const search = await inquirer.prompt([
            {name: 'code', message: 'Enter the Todo code:', type: 'input'}
        ])

        // Trimming the todo code
        search.code = search.code.trim()

        // Connecting to the database
        await connectDB()

        // Starting the spinner
        const spinner = ora('Finding the todo...').start()

        // Finding the todo which the user wants to update
        const todo = await Todos.findOne({code: search.code})

        // Stopping the spinner
        spinner.stop()

        // Checking if the todo exists or not
        if(!todo){
            console.log(chalk.redBright('Could not find a Todo with the code you provided.'))
        } else{
            console.log(chalk.blueBright('Type the updated properties. Press Enter if you don\'t want to update the data.'))

            // Prompting the user to update the todo data
            const update = await inquirer.prompt([
                {name: 'name', message: 'Update the name?', type: 'input', default: todo.name},
                {name: 'detail', message: 'Update the Description?', type: 'input', default: todo.detail},
                {name: 'status', message: 'Update the status', type: 'list', choices: ['pending', 'completed'], default: todo.status}
            ])

            // If user marked status as completed, we delete the todo else we update the data
            if(update.status === 'completed'){
                // Changing spinner text and starting it again
                spinner.text = 'Deleting the todo...'
                spinner.start()

                // Deleting the todo
                await Todos.deleteOne({_id : todo._id})

                // Stopping the spinner and display the success message
                spinner.stop()
                console.log(chalk.greenBright('Deleted the todo.'))
            } else {
                // Update the todo
                spinner.text = 'Updating the todo'
                spinner.start()
                await Todos.updateOne({_id: todo._id}, update, {runValidators: true})
                spinner.stop()
                console.log(chalk.greenBright('Updated the todo.'))
            }
        }

        // Disconnecting from the database
        await disconnectDB()
    } catch (error) {
        // Error Handling
        console.log('Something went wrong, Error: ', error)
        process.exit(1)
    }
}