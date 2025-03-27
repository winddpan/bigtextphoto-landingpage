import {
  ChevronRight,
  ImagePlus,
  Layers,
  Play,
  Sparkles,
  Type,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="absolute left-0 right-0 top-0 h-[230pt] bg-gradient-to-b from-[#FAE12550] to-[#FAE12500] pointer-events-none" />
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-8 md:pt-16 pb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[23%] overflow-hidden shadow-lg">
            <Image
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/e5/79/9de579f6-e549-25b0-09a3-588b2da3a6dd/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/460x0w.webp"
              alt="大字照片 App 图标"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">大字照片</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">文字与图像的创意工坊</p>
        <p className="text-lg md:text-xl italic text-gray-500 mb-8">让文字为你的照片注入灵魂</p>

        <Link
          href="https://apps.apple.com/us/app/%E5%A4%A7%E5%AD%97%E7%85%A7%E7%89%87/id6742029926"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg">
            <Image src="/apple-logo.svg" alt="Apple Logo" width={20} height={24} className="mr-2 invert" />
            App Store 下载
          </Button>
        </Link>
      </header>

      {/* App Description */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            大字照片，一款专为文字与图像融合而生的创意编辑利器。我们深信，每张照片都承载着独特的故事，而恰到好处的文字能赋予其灵魂，让视觉表达更具深度与力量。用大字照片，轻松将你的想法、情感和故事，优雅地呈现在方寸之间。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">【核心亮点】</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">AI 智能添翼</h3>
            </div>
            <p className="text-gray-600">
              创作卡壳？AI智能理解图片意境，为你推荐触动人心的文案灵感。更有专业级版式设计一键应用，瞬间提升作品格调。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Layers className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">精妙分层，掌控景深</h3>
            </div>
            <p className="text-gray-600">
              业界领先的前后景智能分离技术，允许你独立调整前景、背景的滤镜与参数，创造出令人惊叹的视觉层次感与景深效果。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Type className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">文字入景，立体呈现</h3>
            </div>
            <p className="text-gray-600">
              让文字巧妙地穿插于画面的前后景物之间，营造逼真的3D立体感。搭配精心挑选的丰富字体库，风格随心定义。
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Play className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">动态照片，鲜活编辑</h3>
            </div>
            <p className="text-gray-600">
              支持实况照片编辑，效果实时预览，真正所见即所得。滤镜、文字与动态画面无缝融合，创造奇妙生动的视觉故事。
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold">流畅体验，专注创作</h3>
            </div>
            <p className="text-gray-600">
              搭载高性能GPU渲染引擎，带来如丝般顺滑的编辑体验。我们专注于核心功能打磨，让你沉浸创作，而非被繁杂功能干扰。
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <ImagePlus className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">无损画质，细节尽显</h3>
            </div>
            <p className="text-gray-600">
              支持Display P3广色域，导出作品保持原图级别的高清画质。Live Photo支持全帧处理导出，完美融合动静之美。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">立即体验大字照片</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          无论是日常记录的灵光一闪，还是内心深处的情感抒发，大字照片都是你强大的创意伙伴，助你打造与众不同的视觉杰作。
        </p>

        <Link
          href="https://apps.apple.com/us/app/%E5%A4%A7%E5%AD%97%E7%85%A7%E7%89%87/id6742029926"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg group">
            <Image src="/apple-logo.svg" alt="Apple Logo" width={20} height={24} className="mr-2 invert" />
            立即下载
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} 大字照片 - 文字与图像的创意工坊</p>
        </div>
      </footer>
    </div>
  );
}

