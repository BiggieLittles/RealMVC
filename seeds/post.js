// Post data to call models
const { Post } = require('../models');

const postData = 
[
    {
        title: "MVC (Model-View-Controller)",
        content: "is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display.",
        user_id: 1
    },
    {
        title: "Computer Science",
        content: "Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software.",
        user_id:  2
    },  
    {  
        title: " Game Development",
        content: "Game development, production, or design is a process that starts from an idea or concept. Often the idea is based on a modification of an existing game content.Computer languages needed to use is C# and C++ ",
        user_id: 2
    },
    {
        title: " SQL vs NoSQL",
        content: "SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column store",
        user_id: 5

    },
    {
        title: "PWA Progesssive Web Application",
        content: " it is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly.",
        user_id: 4
    }
   
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;