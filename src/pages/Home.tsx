import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Bot, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';
import { Title, Subtitle, CardTitle, CardText } from '../components/Typography';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/Tr6uMK0nfINCdj7j/scene.splinecode" />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      
      <div className="relative z-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl inline-block">
              <Title className="mb-6 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                Create Your AI Companion
              </Title>
              <Subtitle className="max-w-3xl mx-auto text-white/90">
                Qube empowers creators to build, train, and deploy their own AI chatbots with ease
              </Subtitle>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatedCard delay={0.4}>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-6 rounded-xl">
                <Bot className="w-12 h-12 mb-4 text-purple-300" />
                <CardTitle className="mb-2">Custom AI Bots</CardTitle>
                <CardText>Create personalized AI assistants tailored to your specific needs and brand voice</CardText>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl">
                <Code className="w-12 h-12 mb-4 text-blue-300" />
                <CardTitle className="mb-2">No-Code Platform</CardTitle>
                <CardText>Build sophisticated AI chatbots without writing a single line of code</CardText>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 p-6 rounded-xl">
                <Cpu className="w-12 h-12 mb-4 text-cyan-300" />
                <CardTitle className="mb-2">Advanced Training</CardTitle>
                <CardText>Train your bot with custom data and fine-tune its responses for optimal performance</CardText>
              </div>
            </AnimatedCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <Link 
              to="/waitlist" 
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]"
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}