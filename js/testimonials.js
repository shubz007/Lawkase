$(document).ready(function() {
    // Testimonials Data Array
    const testimonials = [
        {
            name: "Jinnie",
            role: "Founding Team",
            image: "images/test2.png",
            message: "C47 Lawkase helped me understand all the legal stuff in my contracts. They were really careful and made sure my business was safe. I felt much better working with them."
        },
        {
            name: "Adv Shivangi Nigam",
            role: "NexPeak Leadership Team",
            image: "images/test2.jpg",
            message: "Going through a divorce and custody issues was really tough. C47 Lawkase was there for me, explaining everything clearly and making sure my kids were okay. They really cared."
        },
        // {
        //     name: "John Doe",
        //     role: "Business Man",
        //     image: "images/testimonial3.jpg",
        //     message: "When I had trouble with my medical license, C47 Lawkase helped me out. They knew exactly what to do and fought hard for me. They're really good at this stuff, and I'd tell anyone to go see them."
        // },
        {
            name: "Rajesh Verma",
            role: "Civil Case – Property Dispute",
            image: "images/test1.png",
            message: "I was stuck in a property dispute for years. The team of Lawkase handled my case so well. They explained everything clearly and fought for my rights. In the end, I got my property without any hassle. Very thankful to them!"
        },
        {
            name: "Sunil Sharma",
            role: "Criminal Case – Wrongful Accusation",
            image: "images/test1.jpg",
            message: "I was falsely accused in a criminal case. I had no idea what to do, but the team of Lawkase stood by me. They proved my innocence and got me justice. Their support gave me confidence in a tough time."
        },
        {
            name: "Pooja Reddy",
            role: "Civil Case – Consumer Complaint",
            image: "images/test3.png",
            message: "A company sold me a faulty product and refused to refund. Team of Lawkase helped me file a complaint and got my money back. The process was smooth, and their team was very helpful. Highly recommended C47 Lawkase."
        }
    ];

    // Select the testimonial slider container
    let owlContainer = $(".testimonial-slider");

    // Loop through the testimonials and add them dynamically
    testimonials.forEach(testimonial => {
        let testimonialHTML = `
            <div class="testimony-1">
                <div class="d-flex align-items-center mb-4">
                    <img src="${testimonial.image}" alt="Image" class="vcard mr-3">
                    <div>
                        <h3>${testimonial.name}</h3>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
                <blockquote>
                    <p>${testimonial.message}</p>
                </blockquote>
            </div>
        `;
        owlContainer.append(testimonialHTML);
    });

    // Initialize Owl Carousel after dynamically adding testimonials
   
});
