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
                    I am a Visionary Entrepreneur, passionate about technology, robotics, and innovation. My journey is about building, learning, and making an impact through ambitious projects.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
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
                                I&apos;m 17 years old and currently attending a science high school with a focus on robotics. I do well in school, but I don&apos;t really like it because I believe it doesn&apos;t teach the true values of life that should be passed on to young people.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I work on many projects. Every day after school, I go straight to my laptop—it&apos;s my world. On my laptop, I create a lot of projects. Right now, I&apos;m developing a custom AI model with two other people. I&apos;ve also programmed a USB stick with multiple operating systems, like Kali Linux, Tails, and Ubuntu.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I&apos;m also a musician; I play the guitar. I&apos;ve programmed an RPG video game and I self-study topics that I find interesting. I read a lot of books and currently do all my coding in Vibe Coding, but I also have experience in C++. I learned it at school and I&apos;m now attending an advanced AI course, having completed the basic one six months ago.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                A few months ago, I started reading books that I find interesting. My main source of knowledge is YouTube; I think there are a lot of valuable things on YouTube and I&apos;ve learned a lot from it, including software editing, like video editing with After Effects and Premiere Pro. I can also use DaVinci Resolve and, of course, CapCut.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I&apos;m a very sociable person, although in my private life, I tend to keep my passion for computer science to myself. While other teenagers might spend their time scrolling on TikTok or Instagram, I spend mine studying computer science on YouTube and working on my projects on GitHub. (In the portfolio site below, there&apos;s also a projects section where I&apos;ll showcase everything I&apos;m working on, including the AI model and the multi-OS USB stick.)
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I&apos;m now in my fourth year of high school. Over these four years, I&apos;ve done quite a few things, including a 3D printing course, robotic component modeling, and a basic AI course. Now I&apos;m following the advanced AI course.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I&apos;ve also participated in various extracurricular activities. I took part in the &quot;Lap to Go&quot; competition at the Italian Space Agency and represented my school in the math and physics olympiads.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Outside of school, I take guitar lessons and have been playing volleyball for 4 or 5 years—I can&apos;t remember exactly. This summer, I&apos;ll work as a lifeguard to gain some work experience.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Before volleyball, I swam for 5 years and I&apos;m currently taking a BLSD course to get the certificate needed to be a lifeguard. I&apos;ll be working at the lake, so I&apos;ll also take the full pool course and then the rowing course, so I can work on inland waters as well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
