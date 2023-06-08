import React from 'react';
import { Row } from 'react-bootstrap';

const Testimonial = () => {

        const testimonial=[

            {
                person:'Steve Bairstow',
                title:'Lost 80 Pounds and 4 Sizes',
                des:'Ladies, meet your new hero. Men, prepare to be humbled. My friend Staci, or Spezzy as she is known health Coach.',
                img:'https://i.ibb.co/6PNvdsp/1.png',
                id:1
            },
            {
                person:'Don Fletcher',
                title:'Lost 146 Pounds and 5 Sizes',
                des:'In 10 months of following Health Coach, Joe has lost 128 pounds. If you are overweight, out of shape, and worried that.',
                img:'https://i.ibb.co/5Kf86Vk/2.png',
                id:2
            },
            {
                person:'Jessica Jung',
                title:'Got Herself into the Shape',
                des:'When it comes to weight loss, exercise is your best friend. If you have not exercised for a long time and are very out.',
                img:'https://i.ibb.co/nRwKNn3/3.png',
                id:3
            },
            {
                person:'Rose H. Sutton',
                title:'Lost 80 Pounds and 4 Sizes',
                des:'Ladies, meet your new hero. Men, prepare to be humbled. My friend Staci, or Spezzy as she is known health Coach.',
                img:'https://i.ibb.co/qp7b4q8/4.jpg',
                id:4
            },
           

        ]
    return (
        <div className='container'>

            <div>
            <Row  xs={1} md={3} lg={3}>

                </Row>
            </div>
        </div>
    );
};

export default Testimonial;