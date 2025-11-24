import React, { useState } from 'react';
import { Card, Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined, LinkedinOutlined } from '@ant-design/icons';
import { references } from '../data/references';
import '../styles/References.css'

export const References = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
        const isExpanded = expanded[index];
        setExpanded({ ...expanded, [index]: !isExpanded });
    };

    const resetExpanded = () => {
        setExpanded({});
    };

    return (
        <section id="references" className="pb-14 bg-site">
            <div className="max-w-4xl mx-auto py-8 text-center">
                <Carousel
                    autoplay={false}
                    autoplaySpeed={5000}
                    dots={false}
                    arrows
                    className="references-carousel"
                    beforeChange={resetExpanded}
                >
                    {references.map((ref, index) => (
                        <div key={index} className="p-4">
                            <Card
                                title={ref.name}
                                extra={
                                    <a href={ref.linkedin} target="_blank" rel="noopener noreferrer">
                                        <LinkedinOutlined />
                                    </a>
                                }
                                className="shadow-lg"
                            >
                                <p className="text-lg leading-relaxed">
                                    {expanded[index] ? ref.fullText : ref.text}
                                </p>
                                {ref.text !== ref.fullText && (
                                    <Button type='link' onClick={() => toggleExpand(index)} className="text-purple-800">
                                        {expanded[index] ? 'Read less' : 'Read more'}
                                    </Button>
                                )}
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

