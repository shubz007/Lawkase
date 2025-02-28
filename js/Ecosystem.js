
        // Array of services
        const services = [
            {
                title: "Startup Incubation",
                description: `We provide end-to-end support to early-stage startups, helping them refine their business ideas, develop sustainable models, and achieve market readiness.
                <ul>
                    <li>Business structuring and compliance support</li>
                    <li>Strategic planning and growth consulting</li>
                    <li>Affordable legal and operational guidance</li>
                </ul>`
            },
            {
                title: "Marketing & Branding Support",
                description: `A strong brand presence is essential for growth. We help startups establish their identity and effectively market their products/services.
                <ul>
                    <li>Digital marketing strategy & execution</li>
                    <li>Brand positioning & storytelling</li>
                    <li>Social media & content marketing support</li>
                </ul>`
            },
            {
                title: "Mentorship & Expert Guidance",
                description: `Access to industry experts and experienced professionals to navigate the challenges of scaling a business.
                <ul>
                    <li>One-on-one mentorship sessions</li>
                    <li>Business model validation and refinement</li>
                    <li>Fundraising and investment readiness</li>
                </ul>`
            },
            {
                title: "Networking & Collaboration",
                description: `We create opportunities for startups to connect with potential investors, industry leaders, and other entrepreneurs.
                <ul>
                    <li>Exclusive networking events</li>
                    <li>Investor & accelerator connections</li>
                    <li>Partnerships with key industry players</li>
                </ul>`
            },
            {
                title: "Research & Development (R&D) Support",
                description: `Innovation is the key to success, and we help startups stay ahead with research-driven insights and regulatory guidance.
                <ul>
                    <li>Market research & competitive analysis</li>
                    <li>Product development & legal compliance</li>
                    <li>Access to industry reports & trends</li>
                </ul>`
            },
            {
                title: "Funding & Investment Assistance",
                description: `We guide startups in securing funding through various channels, from angel investors to venture capital firms.
                <ul>
                    <li>Pitch deck preparation & investor matchmaking</li>
                    <li>Legal & financial due diligence</li>
                    <li>Grant & government scheme assistance</li>
                </ul>`
            },
            {
                title: "Legal & Compliance Framework",
                description: `Ensuring startups remain legally compliant and protected from risks.
                <ul>
                    <li>Business registration & licensing</li>
                    <li>Contract drafting & intellectual property protection</li>
                    <li>Regulatory compliance & dispute resolution</li>
                </ul>`
            },
            {
                title: "Community & Peer Learning",
                description: `A strong startup community fosters innovation and collaboration. We create spaces where entrepreneurs can learn from each other.
                <ul>
                    <li>Peer learning sessions & workshops</li>
                    <li>Founders' forums & roundtable discussions</li>
                    <li>Collaborative problem-solving spaces</li>
                </ul>`
            },
            {
                title: "Technology & Digital Transformation",
                description: `Helping startups leverage technology for efficiency, scalability, and competitive advantage.
                <ul>
                    <li>Digital transformation strategy</li>
                    <li>Legal tech & automation solutions</li>
                    <li>Data protection compliance</li>
                </ul>`
            }
        ];

        // Select the container
        const container = document.getElementById("services-container");

        // Loop through the services and create divs dynamically
        services.forEach((service, index) => {
            const div = document.createElement("div");
            div.classList.add("col-md-6", "col-lg-4"); // Bootstrap grid classes for responsive layout
            div.innerHTML = `
                <div class="service-card">
                    <h3 class="service-title">${index + 1}. ${service.title}</h3>
                    <p class="service-desc">${service.description}</p>
                </div>
            `;
            container.appendChild(div);
        });
    