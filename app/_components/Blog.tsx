'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    tags: string[];
}

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(contentRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: contentRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.blog-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: contentRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(contentRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: contentRef },
    );

    // Animation function for external link icon
    const createIconAnimation = (svgRef: React.RefObject<SVGSVGElement>) => {
        return () => {
            const arrowLine = svgRef.current?.querySelector('#arrow-line') as SVGPathElement;
            const arrowCurb = svgRef.current?.querySelector('#arrow-curb') as SVGPathElement;
            const box = svgRef.current?.querySelector('#box') as SVGPathElement;

            gsap.set(box, {
                opacity: 0,
                strokeDasharray: box?.getTotalLength(),
                strokeDashoffset: box?.getTotalLength(),
            });
            gsap.set(arrowLine, {
                opacity: 0,
                strokeDasharray: arrowLine?.getTotalLength(),
                strokeDashoffset: arrowLine?.getTotalLength(),
            });
            gsap.set(arrowCurb, {
                opacity: 0,
                strokeDasharray: arrowCurb?.getTotalLength(),
                strokeDashoffset: arrowCurb?.getTotalLength(),
            });

            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tl.to(svgRef.current, {
                autoAlpha: 1,
            })
                .to(box, {
                    opacity: 1,
                    strokeDashoffset: 0,
                })
                .to(
                    arrowLine,
                    {
                        opacity: 1,
                        strokeDashoffset: 0,
                    },
                    '<0.2',
                )
                .to(arrowCurb, {
                    opacity: 1,
                    strokeDashoffset: 0,
                })
                .to(
                    svgRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '+=1',
                );
        };
    };

    // Blog post card component with animated icon
    const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => {
        const externalLinkSVGRef = useRef<SVGSVGElement>(null);
        const { contextSafe } = useGSAP(() => {}, {
            scope: externalLinkSVGRef,
            revertOnUpdate: true,
        });

        const handleMouseEnter = contextSafe?.(() => {
            const animateIcon = createIconAnimation(externalLinkSVGRef);
            animateIcon();
        });

        const handleMouseLeave = contextSafe?.(() => {
            if (externalLinkSVGRef.current) {
                gsap.killTweensOf(externalLinkSVGRef.current);
                gsap.set(externalLinkSVGRef.current, { autoAlpha: 0 });
            }
        });

        return (
            <article 
                className="group blog-item bg-background-light backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-1 relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* External link icon in top right */}
                <div className="absolute top-4 right-4 text-foreground opacity-0 group-hover:opacity-100 transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        ref={externalLinkSVGRef}
                    >
                        <path
                            id="box"
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        ></path>
                        <path id="arrow-line" d="M10 14 21 3"></path>
                        <path id="arrow-curb" d="M15 3h6v6"></path>
                    </svg>
                </div>

                <a
                    href={`https://lollo-blog.vercel.app/posts/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                >
                    <div className="mb-4">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} />
                                <span>{formatDate(post.date)}</span>
                            </div>
                            <span className="inline-block size-1.5 rounded-full bg-muted"></span>
                            <div className="flex items-center gap-1">
                                <Clock size={12} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-anton leading-tight mb-3 transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                            {post.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                                <span 
                                    key={tag}
                                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                                >
                                    {tag}
                                </span>
                            ))}
                            {post.tags.length > 2 && (
                                <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
                                    +{post.tags.length - 2}
                                </span>
                            )}
                        </div>
                    </div>
                </a>
            </article>
        );
    };

    // Mock data per ora - in futuro potresti implementare un'API per recuperare i post reali
    useEffect(() => {
        // Simula il caricamento dei post del blog
        setTimeout(() => {
            const mockPosts: BlogPost[] = [
                {
                    title: "La mia esperienza con Next.js e TypeScript",
                    excerpt: "Condivido le mie riflessioni e i consigli pratici per sviluppare applicazioni moderne con Next.js...",
                    date: "2025-06-10",
                    readTime: "5 min",
                    slug: "nextjs-typescript-experience",
                    tags: ["Next.js", "TypeScript", "React"]
                },
                {
                    title: "Machine Learning per principianti",
                    excerpt: "Una guida completa per iniziare con il machine learning e Python, dalle basi ai primi progetti...",
                    date: "2025-06-05",
                    readTime: "8 min",
                    slug: "machine-learning-beginners",
                    tags: ["Python", "Machine Learning", "AI"]
                },
                {
                    title: "Design System e componenti riutilizzabili",
                    excerpt: "Come creare un design system efficace per le tue applicazioni web moderne...",
                    date: "2025-05-28",
                    readTime: "6 min",
                    slug: "design-system-components",
                    tags: ["Design", "UI/UX", "Frontend"]
                }
            ];
            setPosts(mockPosts);
            setLoading(false);
        }, 1000);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('it-IT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section id="blog" className="py-section">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Blog" />
                
                <div ref={contentRef}>
                    <div className="mt-16">
                        {loading ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="animate-pulse bg-background-light rounded-xl p-6 border border-border">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-3 bg-muted rounded w-20"></div>
                                            <div className="size-2 bg-muted rounded-full"></div>
                                            <div className="h-3 bg-muted rounded w-16"></div>
                                        </div>
                                        <div className="h-8 bg-muted rounded mb-4"></div>
                                        <div className="h-4 bg-muted rounded mb-2"></div>
                                        <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                                        <div className="flex gap-2 mb-4">
                                            <div className="h-6 bg-muted rounded-full w-16"></div>
                                            <div className="h-6 bg-muted rounded-full w-20"></div>
                                            <div className="h-6 bg-muted rounded-full w-18"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {posts.map((post, index) => (
                                        <BlogPostCard key={index} post={post} index={index} />
                                    ))}
                                </div>
                                
                                <div className="text-center mt-16">
                                    <Button
                                        as="link"
                                        href="https://lollo-blog.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        className=""
                                    >
                                        Visita il Blog Completo
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
