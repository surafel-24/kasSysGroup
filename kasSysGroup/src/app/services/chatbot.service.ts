import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private responses = {
    'what does kassys group inc. specialize in?': 'KasSys Group Inc. specializes in Enterprise Resource Planning (ERP), Enterprise Resource Management (ERM), and Decision Support Systems (DSS). We provide end-to- end services, including implementation, maintenance, and education, to help businesses leverage technology effectively.',
    'can you tell me more about the erp, erm, and dss solutions kassys offers?': 'Our ERP, ERM, and DSS solutions focus on optimizing business processes across Financials, Distribution, Manufacturing, and Supply Chain Management. From strategic implementation to ongoing support, we ensure that your systems align with your business goals.',
    'what is ross™ consulting, and how does kassys group support it?': 'KasSys has been a trusted ROSS™ consulting partner since 1996. We have completed over 70 successful projects, providing full support for ROSS ERP, ERM, and SCM applications. Our ROSS™ services include implementation, total care support, and custom solutions across various business functions.',
    'who is kassys group inc.?': 'Founded in 1999 and based in North Virginia, KasSys Group Inc. was built to help clients realize business value through smart technology solutions. Our team includes former systems development experts with extensive experience in Database Management, System Design, Programming, and Project Manageme',
    'what is kassys group’s approach to client projects?': ' Our approach is client-focused and transparent, with a commitment to customer satisfaction. We assign senior management and technology consultants to each project, ensuring we address business challenges with industry-specific expertise. Our clients appreciate our honest counsel and dedication to their success.',
    'how does kassys group ensure successful project delivery?':'We work closely with our clients to define clear strategies, milestones, and project phases, ensuring projects are completed on time and within budget. Our focus on transparency and direct communication fosters long-term relationships with clients',
    'how does kassys group support businesses both locally and internationally':'With deep expertise in both local and global markets, KasSys provides tailored echnology solutions that help businesses navigate and succeed in diverse markets.',
    'why should i choose kassys group as a technology partner?':'KasSys is more than a service provider; we are a committed partner who understands the specific needs and challenges of your business. With our extensive experience and focus on customer satisfaction, we deliver solutions that drive measurable results and sustainable growth.',
    'how can i get started with kassys group?':'To learn more or begin your project with us, contact our team at: - Phone: (703) 854-1033 - Email: [contact@kassysgroup](mailto:contact@kassysgroup) - Address: 8230 Boone Blvd. Suite 210, Vienna, VA 22182',
    'what industries does kassys group inc. serve?':'KasSys Group works across diverse industries, providing custom solutions for sectors such as finance, manufacturing, distribution, and supply chain management. Our team adapts to specific industry needs to help clients maximize their technology investments.',
    'how does kassys group handle data security and compliance?':'We prioritize data security and compliance in all of our services. For cloud migrations, ERP systems, and database support, we implement stringent security protocols and ensure compliance with industry regulations to protect sensitive data.',
    'what is kassys group’s experience with international projects?':'KasSys Group has successfully executed numerous international projects, bringing expertise in global ERP, ERM, and DSS implementations. We understand the challenges of scaling technology solutions globally and tailor our approach to meet each client’s unique requirements.',
    'does kassys group offer ongoing support after implementation?':'Yes, our services extend beyond implementation. We offer "total care" services to support and maintain your ERP, ERM, and DSS systems, ensuring optimal performance and timely upgrades to meet evolving business needs.',
    'how does kassys group incorporate customer feedback into projects?':'Customer feedback is central to our approach. We work collaboratively with our clients throughout each project, regularly reviewing milestones and adjusting as needed to ensure the final outcome aligns with their expectations',
    'does kassys group provide training for my team on new systems?':'Absolutely. We offer customized training for all implemented systems, ensuring your team can confidently and effectively manage and operate the new technology. Training can be done on-site, virtually, or through detailed documentation.',
    'what type of businesses benefit most from working with kassys group?':'Businesses that prioritize scalable growth, secure operations, and data-driven decision- making benefit significantly from our services. We cater to organizations of all sizes, from small enterprises to large corporations, providing tailored solutions for each.',
    'what sets kassys group apart from other technology consulting firms?':'KasSys Group is dedicated to customer success through honesty, integrity, and deep technical expertise. Our clients trust us for direct communication, industry knowledge, and our proven track record of delivering results on time and within budget.'
        // Add more Q&A pairs here
  };

  getResponse(question: string): string {
    const lowerCaseQuestion = question.toLowerCase() as keyof typeof this.responses;
    return this.responses[lowerCaseQuestion] || "I'm sorry, I didn't understand that.";
  }

  getAvailableQuestions(): string[] {
    return Object.keys(this.responses);
  }
}