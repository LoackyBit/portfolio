'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Ambitious and results-oriented student with a strong passion for technology, robotics, and innovation. I am dedicated to developing impactful solutions through advanced projects and a commitment to continuous learning.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Lorenzo.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a high school student specializing in robotics, with a proven track record in both academic and extracurricular projects. My expertise spans artificial intelligence, software development, and electronics, with hands-on experience in designing and implementing innovative solutions such as custom AI models and multi-boot USB systems.                  </p>
                            <p className="mt-3 slide-up-and-fade">
                                I have developed and contributed to several technology projects, including video game development, automation systems, and open-source software. My technical skills include programming in C++, Python, and JavaScript, as well as proficiency in video editing and digital content creation using industry-standard tools.                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I&apos;m an active participant in national competitions, such as the Italian Space Agency&apos;s &quot;LAB2GO&quot; and the Math and Physics Olympiads, and I continuously seek opportunities to expand my knowledge through advanced courses and self-directed study.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Outside of academics, I am dedicated to personal growth through music, sports, and community engagement. I play the guitar, have a background in competitive swimming and volleyball, and am currently training as a certified lifeguard.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My approach is characterized by curiosity, determination, and a drive to make a positive impact through technology and teamwork. I am eager to collaborate on challenging projects and contribute to the advancement of innovative solutions.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Currently in my fourth year of high school, I have engaged in diverse extracurricular activities and academic pursuits. Notably, I have completed a 3D printing course, robotic component modeling, and a fundamental AI course, and I am currently enrolled in an advanced AI course.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Furthermore, I have participated in the ‘LAB2GO’ competition organized by the Italian Space Agency, representing my school in the mathematics and physics olympiads.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Outside of academic commitments, I pursue personal interests such as guitar lessons and have been playing volleyball for approximately four to five years. This summer, I intend to gain practical work experience by working as a lifeguard.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Prior to volleyball, I swam for five years and am currently enrolled in a Basic Life Support and Defibrillation (BLSD) course to obtain the necessary certification for lifeguarding duties. As I will be working at a lake, I will also complete the full pool course and the rowing course to enhance my skills for inland water rescue operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
