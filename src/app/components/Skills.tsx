import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Technologies I work with </h2>
                <p className='text-gray-950 pt-2'>
                A frontend developer and a skilled professional responsible for designing and building the user interface and user experience (UI/UX) of websites, web applications, and mobile applications.To bridge the gap between design and technology, transforming visual designs into functional, interactive, and responsive digital products. Using programming languages like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js, frontend developers craft intuitive and engaging interfaces that ensure seamless user interactions. Their expertise encompasses responsive design, accessibility, browser compatibility, and performance optimization, ensuring a flawless user experience across various devices and platforms. By combining creativity with technical expertise, frontend developers play a critical role in shaping the digital landscape and delivering impactful online experiences.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3x1 sm:text-4xl'>
                    <div className='space-y-3'>
                        <h2>HTML</h2>
                        <h2>CSS</h2>
                        <h2>Typescript</h2>
                    </div>
                    <div className='space-y-3'>
                        <h2>Nextjs</h2>
                        <h2>Reactjs</h2>
                        <h2>TailwindCss</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills