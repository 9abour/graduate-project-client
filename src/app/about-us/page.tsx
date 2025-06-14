import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail } from 'lucide-react';
import CTA from '@/components/about-us/CTA';

export const metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Ahmed Mohamed',
      role: 'Full Stack Developer',
      bio: 'Specialized in Next.js and NestJS with expertise in travel systems architecture.',
      avatar: '/team/ahmed.jpg',
      linkedin: '#',
      github: '#',
      email: 'ahmed@travelsystem.com',
    },
    {
      name: 'Sarah Ali',
      role: 'UI/UX Designer',
      bio: 'Passionate about creating seamless travel booking experiences with beautiful interfaces.',
      avatar: '/team/sarah.jpg',
      linkedin: '#',
      github: '#',
      email: 'sarah@travelsystem.com',
    },
    {
      name: 'Omar Khalid',
      role: 'Backend Engineer',
      bio: 'Database expert ensuring fast and reliable ticket booking operations.',
      avatar: '/team/omar.jpg',
      linkedin: '#',
      github: '#',
      email: 'omar@travelsystem.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container">
          <h1 className="main-title-white mb-8">About Our Travel Platform</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-600 mb-12">
            Revolutionizing travel booking with a unified platform that connects
            travelers with the best options across multiple providers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <StatCard
              number="10K+"
              title="Happy Travelers"
              description="Booked through our platform worldwide"
            />
            <StatCard
              number="50+"
              title="Travel Companies"
              description="Integrated with our booking system"
            />
            <StatCard
              number="24/7"
              title="Support"
              description="Dedicated team ready to assist you"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Our Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 main-title-white">
                Simplifying Travel Booking
              </h3>
              <p className="text-gray-600 dark:text-gray-600 mb-6">
                We recognized the frustration travelers face when navigating
                multiple websites to compare options. Our platform brings
                everything together in one place, saving time and reducing
                stress.
              </p>
              <p className="text-gray-600 dark:text-gray-600">
                For travel companies, we provide powerful analytics tools
                previously only available to large corporations, leveling the
                playing field in the industry.
              </p>
            </div>
            <div className="bg-white dark:bg-black/20 p-6 rounded-xl shadow-lg">
              <img
                src="/our-mission.webp"
                alt="Travel mission"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Our Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechCard
              name="Next.js"
              description="For blazing fast frontend performance"
              icon="/nextjs.jpeg"
            />
            <TechCard
              name="NestJS"
              description="Robust backend architecture"
              icon="/nestjs.png"
            />
            <TechCard
              name="MongoDB"
              description="Flexible database for travel data"
              icon="/mongoodb.webp"
            />
            <TechCard
              name="Tailwind CSS"
              description="Beautiful, responsive designs"
              icon="/tailwind.webp"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Meet The Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

function StatCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition">
      <CardHeader className="p-0">
        <span className="text-4xl font-bold text-gradient">{number}</span>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <h3 className="text-xl font-semibold text-gray-950">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}

function TechCard({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: string;
}) {
  return (
    <Card className="p-6 text-center hover:shadow-md transition">
      <CardContent className="p-0 flex flex-col items-center">
        <div className="w-36 h-36 mb-4 rounded-full overflow-hidden">
          <img src={icon} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-dark">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="p-6 text-center hover:shadow-md transition">
      <CardContent className="p-0">
        <div className="flex-jc-c mb-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={member.avatar} />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-xl font-semibold dark:text-white">{member.name}</h3>
        <p className="text-orange-500 mb-3">{member.role}</p>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{member.bio}</p>
        <div className="flex justify-center gap-3">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </a>
          <a href={`mailto:${member.email}`}>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
