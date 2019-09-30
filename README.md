# task-scheduler
A simple svelte webapp to schedule tasks between people during time

__link to the site:__ [https://task-scheduler-x.herokuapp.com/](https://task-scheduler-x.herokuapp.com/)

## Project purpose:

This project is my first approach to **Svelte.js**. I caught the chance to make a site to schedule tasks in a group of people during a chosen number of weeks. The project shows a **default** set of data, which can be customized by changing the **src/content.json** file.

## Customize project:

# Customizing

Set the **src/content.json**.

These are the properties:
* __persons__: An **array of strings**, containing the people whom the tasks will be assigned.
* __tasks__: An **array of strings**, containing the tasks to assign to the perople.
* __from__: A **string formatted as 'year-month-day'**, containing the start date of the assignment.
* __howMany__: The **number** of consecutive weeks that will be considered.

This is my example:

```json
{
    "persons": ["MARIO", "JOHN", "MOHAMMED", "CHENG"],
    "tasks": ["Kitchen", "Bathroom", "Bedroom", "Trash"],
    "from": "2019-07-29",
    "howMany": 30
}
```
# Deploying

To deploy:

* Go to the project root folder
* With nodejs installed, run `npm i` to install the dependencies
* Run `npm run deploy` to compile the site and make an hash code of the public directory
* Run `npm run serve:local` to lunch the local server
* Go to http://localhost:8080 to see the result

## How was it made

The project was made with **Svelte.js**, a performant light-weight alternative to frameworks like Angular, React and Vue. The site is served by a **node.js** server and is also a **PWA**. The hasher script in the package.json hashes the public directory and adds it to the cache name of the **service-worker**. Following the Svelte.js tenets, I used **rollup** instead of webpack. The site is hosted with **Heroku**.

## Performance

Even tough the site is extremly simple, with the google audits is possible seeing the performance of Svelte.js. A part from the not used http/v2 due to heroku (not cheap) support, the audit's parameters are almost perfect (at least at the time of this commit).
