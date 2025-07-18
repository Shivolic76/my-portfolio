import { useState } from 'react'
import { Button, Card, Space, Typography, Avatar } from 'antd'
import { FaReact, FaGithub, FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiTailwindcss, SiAntdesign } from 'react-icons/si'
import profileImage from './assets/shivam-profile.jpg'
import './App.css'

const { Title, Text } = Typography

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <Card className="text-center mb-8 shadow-lg bg-gradient-to-r from-white to-blue-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="relative">
              <Avatar
                size={120}
                src={profileImage}
                className="border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            <div>
              <Title level={2} className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shivam Chudasama
              </Title>
              <Text className="text-gray-600 text-lg font-medium">Full Stack Developer</Text>
              <div className="flex justify-center gap-4 mt-3">
                <FaGithub className="text-gray-700 hover:text-gray-900 cursor-pointer text-xl transition-colors" />
                <FaReact className="text-blue-500 hover:text-blue-600 cursor-pointer text-xl transition-colors" />
                <FaHeart className="text-red-500 hover:text-red-600 cursor-pointer text-xl transition-colors" />
              </div>
            </div>
          </div>
        </Card>

        <Title level={1} className="text-center mb-8">
          Portfolio Setup Complete! 🎉
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Tailwind CSS Card */}
          <Card
            title={
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-cyan-500 text-xl" />
                <span>Tailwind CSS</span>
              </div>
            }
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="space-y-3">
              <div className="w-full h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
              <Text>Utility-first CSS framework working perfectly!</Text>
            </div>
          </Card>

          {/* Ant Design Card */}
          <Card
            title={
              <div className="flex items-center gap-2">
                <SiAntdesign className="text-blue-600 text-xl" />
                <span>Ant Design</span>
              </div>
            }
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Space direction="vertical" className="w-full">
              <Button type="primary" onClick={() => setCount(count + 1)}>
                Count: {count}
              </Button>
              <Text>React UI components ready to use!</Text>
            </Space>
          </Card>

          {/* React Icons Card */}
          <Card
            title={
              <div className="flex items-center gap-2">
                <FaReact className="text-blue-400 text-xl animate-spin" />
                <span>React Icons</span>
              </div>
            }
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex justify-center gap-4 text-2xl">
                <FaLinkedin className="text-blue-600 hover:text-blue-500 cursor-pointer transition-colors" />
                <FaTwitter className="text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
                <FaGithub className="text-gray-800 hover:text-gray-600 cursor-pointer transition-colors" />
              </div>
              <Text>Thousands of icons at your disposal!</Text>
            </div>
          </Card>
        </div>

        <Card className="text-center shadow-lg">
          <Title level={3}>All Libraries Successfully Installed! ✅</Title>
          <Text className="text-gray-600">
            Your portfolio project is now equipped with Tailwind CSS, Ant Design, and React Icons.
            Start building your amazing portfolio!
          </Text>
        </Card>
      </div>
    </div>
  )
}

export default App
