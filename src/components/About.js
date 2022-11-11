import React, { useContext, useEffect } from 'react'


const About = () => {

    return (
        <div class="panel" id="aboutus">
            <div class="content_section">
                <h1>About Us</h1>
                <img src="https://images.unsplash.com/photo-1616628188550-808682f3926d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MnwxfDB8MXxyYW5kb218MHx8bm90ZXx8fHx8fDE2Njc4MDE3Mjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160" alt="Image 02" class="image_wrapper image_fl" />
                <p><em>INotebook is an Amazing application for managing personal notes on the cloud</em></p>
                <p>Tired of not having the right info handy when you need it? INotebook automatically saves notes online. INotebook gives you everything you need to keep life organized—great note taking, <a href="#">project planning</a> , and easy ways to find what you need, when you need it. Create a personal space for all your most important ideas and <a href="#">information</a>. You can edit or delete it whenever you want.The right information, right at your fingertips. You can make an account in INotebook and start to enjoy our services. If you already have an <a href="#">account </a> , then just login and access your notes. With smart ways to save and access your notes, the information you need is always available when you need it.</p>
            </div>

            <div class="content_section last_section">
                <h2>Testimonial</h2>
                <blockquote>
                    <p>Inotebook proved to be a fantastic option for maintaining my private notes when I was initially unsure about which application to use. I can access, modify, and remove my notes whenever I want. I am more than satisfied with this application</p>
                    <cite>Sumit Verma - <span>Web Developer</span></cite>
                </blockquote>
            </div>
        </div>
    )
}

export default About
