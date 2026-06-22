import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Badge } from './badge'   
import { Button } from './Button'

interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    techStack: string[],
    repoUrl: string,
    liveUrl?: string 
}

const ProjectCard = ({ title, description, image, techStack, repoUrl, liveUrl }: ProjectCardProps) => {
    return (
    <div className="w-full h-full rounded-2xl p-5 bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Card className="w-full gap-5">
                <CardHeader>
                    <CardTitle >{title}</CardTitle>
                    <img
                    src={image}
                    className="w-full h-auto max-w-2xl rounded-xl brightness-75 contrast-110"
                    />
                    <CardDescription >{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="w-full flex justify-center">
                        <a href={repoUrl} target="_blank">
                            <Button size="lg" className="text-xl px-4 py-2 rounded-lg bg-orange shadow-[-0.45px_-0.75px_1px_rgba(255,185,140,0.6),0.45px_8px_8px_rgba(0,13,18,0.6)]
                                hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[[-0.45px_-0.75px_1px_rgba(255,185,140,0.6), 0_16px_40px_rgba(0,0,0,0.28)]">
                                    View Repo
                            </Button> 
                        </a>
                        {liveUrl && (
                            <a href={liveUrl} target="_blank">
                                <Button size="lg" className="text-xl px-4 py-2 rounded-lg bg-green shadow-[-0.45px_-0.75px_1px_rgba(144,238,144,0.6),0.45px_8px_8px_rgba(0,13,18,0.6)]
                                hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[[-0.45px_-0.75px_1px_rgba(144,238,144,0.6), 0_16px_40px_rgba(0,0,0,0.28)]">
                                    View Live
                                </Button>
                            </a>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProjectCard