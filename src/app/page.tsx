'use client'
import { motion } from "framer-motion";
import { CheckCircle2, StarIcon } from "lucide-react";
import Hero from "@/components/ui/hero";
import NavMenu from "@/components/ui/nav-menu";
import SubjectCard from "@/components/ui/subject-card";
import ClassTypeBadge from "@/components/ui/class-type-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/ui/footer";
import Image from 'next/image'
import imag12 from "../../public/assets/images/avatars/img1.png"
import img7 from "../../public/assets/images/avatars/img7.png"
import img8 from "../../public/assets/images/avatars/img8.png"
import img9 from "../../public/assets/images/avatars/img9.png"
import img10 from "../../public/assets/images/avatars/img10.png"
import img11 from "../../public/assets/images/avatars/img11.png"
import ContactForm from "@/components/ui/contact";
// import im

export default function Home() {
  const subjects = [
    {
      title: "Robotics",
      description: "Explore robotics concepts, including sensors, automation, programming, and mechanical design",
      icon: "calculator",
      color: "bg-blue-100"
    },
    {
      title: "Internet Of Things (IOT)",
      description: "Explore IoT concepts, including sensors, connectivity, data processing, and automation.",
      icon: "book",
      color: "bg-yellow-100"
    },
    {
      title: "Python Coding",
      description: "Explore Python programming concepts, including variables, functions, data structures, and more.",
      icon: "pencil",
      color: "bg-green-100"
    },
    {
      title: "Web Development",
      description: "Explore HTML, CSS, JavaScript, and more to build dynamic and interactive websites. ",
      icon: "palette",
      color: "bg-purple-100"
    }
  ];

  const benefits = [
    "Master program knowledge at school",
    "The ability to criticize knowledge increases",
    "Respond confidently when encountering difficult situations"
  ];

  const features = [
    {
      title: "Experienced teacher",
      description: "Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential",
      icon: "👩‍🏫"
    },
    {
      title: "Creative program",
      description: "Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or \"study now, pay later\"",
      icon: "📚"
    },
    {
      title: "Appropriate cost",
      description: "Program design based on student ability and learning needs, dynamic learning activities, interactive with 2 children at the same time",
      icon: "💰"
    }
  ];

  const testimonials = [
    {
      name: "Jassica Andrew",
      avatar: img9,
      rating: 5,
      text: "My child has improved a lot after finishing school. Thank you very much "
    },
    {
      name: "Darlene Robertson",
      avatar:  img10,
      rating: 5,
      text: "My child knows how to write very good essays. English ability is also much better. The cost is very cheap, so you should register. Thank you very much Aakriti Learning Curve."
    },
    {
      name: "Dianne Russell",
      avatar: img11,
      rating: 5,
      text: "My child has improved a lot after finishing school. Thank you very much Aakriti Learning Curve"
    }
  ];
     
  return (
    <div className="min-h-screen bg-background">
      <NavMenu />
      <Hero />

      <section className="container mx-auto px-4 py-16" id="course">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Lessons revolve around 4 areas</h2>
          <p className="text-muted-foreground">
          Diverse lessons across four subjects—Robotics, Internet of Things (IoT), Coding, and Web Development Course help children enhance their comprehensive knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-[300px] w-full flex items-stretch"
            >
              <SubjectCard {...subject} />
            </motion.div>
          ))}
        </div>
      </section>
  
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
              <Image src={img8}
              width={500}
              height={500}
              alt="Picture8"
            />
      
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              What will your child get after studying at Aakriti Learning Curve?
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why should you choose Aakriti Learning Curve?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What's in the class at Aakriti Learning Curve?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Online classes with teachers, continuous questions and answers during class if you do
            not understand. At the end of the session, the lesson is recorded for your child to review
          </p>
          <Button
            variant="default"
            size="lg"
            className="mt-6 bg-primary text-primary-foreground"
          >
            Free trial lesson
          </Button>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden">
        <Image src={img7}
              width={500}
              height={500}
              alt="Picture7"
            />
         
          <div className="absolute bottom-4 right-4">
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                ↓
              </button>
              <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                ↑
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <ClassTypeBadge type="audio" />
          <ClassTypeBadge type="live" />
          <ClassTypeBadge type="recorded" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-[#FFFCF2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-8">What do students say about Aakriti Learning Curve?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{testimonial.name}</h3>
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-[#262626] text-white relative overflow-hidden" id="contact_us">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* <p className="text-gray-300 mb-8">
            Don't hesitate to leave us your phone number. We will contact you to
            discuss any questions you may have
          </p> */}

          {/* {<div className="flex gap-2">
            <Input
              type="tel"
              placeholder="Enter your phone number"
              className="bg-[#333] border-none text-white"
            />
            <Button className="bg-primary text-primary-foreground">
              Subscribe
            </Button>
          </div> } */}

          <ContactForm />
        </div>

        {/* Floating avatars */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute w-12 h-12 rounded-full overflow-hidden"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <Image src={imag12}
              width={500}
              height={500}
              alt="Picture"
            />
          </div>
          <div

            className="absolute w-12 h-12 rounded-full overflow-hidden"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <Image src={imag12}
              width={500}
              height={500}
              alt="Picture"
            />

          </div>
          <div

            className="absolute w-12 h-12 rounded-full overflow-hidden"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <Image src={imag12}
              width={500}
              height={500}
              alt="Picture"
            />

          </div>
          <div

            className="absolute w-12 h-12 rounded-full overflow-hidden"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <Image src={imag12}
              width={500}
              height={500}
              alt="Picture"
            />

          </div>

        </div>
      </section>
        
      <Footer />
    </div>
  );
}