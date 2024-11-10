import { title } from "process";
import React from "react";
import Heading from "./heading";
import Card from "./Card";
const data = [
    {
        id:0,
        title:"Article",
        desc:"An article of reactjs vs nextjs using html and custom css featuring enhancing difference between react and nextjs",
        img:"/article.jpeg",
        tags:["React" , "Nextjs", "HTML", "CSS"]
    },
    {
        id:1,
        title:"Dynamic Resume Builder",
        desc:"Created a dynamic resume builder using react and custom css and javascript functionality to build and download resume",
        img: "/resume-builder.png",
        tags:  ["Reactjs" ,"Nextjs", "HTML","CSS","Javascript"]      
    },
    {
        id:2,
        title:"Static Resume",
        desc: "create static resume using HTML and CSS and javascript which shows functionalty of hide/show of skills section.",
        img: "/static-resume.png",
        tags: ["HTML","CSS","Javascript"]       
    },
    {
        id:3,
        title:"Todo App",
        desc:"A todo app created by using reactjs and tailwind css which shows functionalty of add remove and edit of your todos",
        img:"/todoapp.jpeg",
        tags:["Nextjs","Tailwindcss","javascript"]        
    }
]

const Project = () =>{
    return(
        <div id="projects" className="container pt-32">
              <Heading title="My Projects"/>
              <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {data.map((el) => (<Card
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
              </div>
        </div>
    )
}

export default Project;