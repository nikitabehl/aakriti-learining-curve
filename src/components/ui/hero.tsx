import { motion } from "framer-motion";
import { Button } from "./button";

export default function Hero() {
  return (
    <div className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Knowledge Connection
                <br />
                <span className="text-primary">Open the Door to the Future</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Giving every student the opportunity to access the best education and open
                the door to the world of knowledge.
              </p>
              <p className="text-muted-foreground mb-8">
                Start your learning journey today with Edudu to become an outstanding
                student in our learning community.
              </p>
              <Button size="lg" className="rounded-full">
                Get started !
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-500/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
