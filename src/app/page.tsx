"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Palette, Sparkles, Sun, Moon, LayoutTemplate, Menu, Paintbrush, ShieldCheck, Download, Settings, Code, HelpCircle, BookOpen, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        icon: <Paintbrush className="size-8 text-primary" />,
        title: "Tự động phân tích màu sắc",
        description: "Tự động phân tích màu sắc từ ảnh bìa truyện để tạo ra một giao diện độc đáo.",
    },
    {
        icon: <Sparkles className="size-8 text-primary" />,
        title: "Material You à la Hako",
        description: "Áp dụng Material You color scheme động, mang lại trải nghiệm cá nhân hóa.",
    },
    {
        icon: <LayoutTemplate className="size-8 text-primary" />,
        title: "Giao diện Responsive",
        description: "Giao diện được thiết kế để hoạt động mượt mà trên cả máy tính và điện thoại.",
    },
    {
        icon: <Moon className="size-8 text-primary" />,
        title: "Hỗ trợ Dark Mode",
        description: "Chế độ tối được tối ưu hóa, giúp bảo vệ mắt của bạn khi đọc truyện vào ban đêm.",
    },
    {
        icon: <Rocket className="size-8 text-primary" />,
        title: "Tối ưu hóa trải nghiệm",
        description: "Tối ưu hóa trải nghiệm đọc truyện của bạn với các tính năng hữu ích."
    },
    {
        icon: <ShieldCheck className="size-8 text-primary" />,
        title: "Chặn quảng cáo popup",
        description: "Chặn quảng cáo popup, bảo vệ thông tin đăng nhập Google/Facebook của bạn."
    },
    {
        icon: <Download className="size-8 text-primary" />,
        title: "Tự động cập nhật",
        description: "Tự động kiểm tra và cập nhật phiên bản mới nhất của script."
    },
    {
        icon: <Paintbrush className="size-8 text-primary" />,
        title: "Tag màu sắc theo thể loại",
        description: "Phân biệt các thể loại truyện bằng màu sắc riêng biệt."
    }
];

const technicalFeatures = [
    {
        icon: <Code className="size-8 text-primary" />,
        title: "Canvas API",
        description: "Sử dụng Canvas API để phân tích màu sắc ảnh một cách hiệu quả và chính xác.",
    },
    {
        icon: <Settings className="size-8 text-primary" />,
        title: "MonetAPI v2.0-Integrated",
        description: "Hệ thống quản lý màu sắc nâng cao với caching và tối ưu hóa khả năng truy cập.",
    },
    {
        icon: <ShieldCheck className="size-8 text-primary" />,
        title: "Ad Popup Blocker",
        description: "Chặn quảng cáo popup, bảo vệ thông tin đăng nhập Google/Facebook của bạn.",
    },
    {
        icon: <Rocket className="size-8 text-primary" />,
        title: "Modular Architecture",
        description: "Kiến trúc module giúp dễ dàng bảo trì, mở rộng và phát triển các tính năng mới.",
    }
];


const faqItems = [
  {
    question: "Script này có an toàn không?",
    answer: "Có, script này chỉ thay đổi giao diện người dùng và không thu thập dữ liệu cá nhân. Và source code ở đây thì bạn lo lắng gì nữa đúng không?",
  },
  {
    question: "Làm thế nào để báo cáo lỗi?",
    answer: "Bạn có thể tạo một issue mới trên GitHub và mô tả chi tiết về lỗi bạn gặp phải.",
  },
    {
    question: "Script có hỗ trợ nhiều ngôn ngữ không?",
    answer: "Hiện tại, script chỉ hỗ trợ tiếng Việt. Nói thẳng ra là thằng chủ repository nó bị ngu nên không biết viết multilanguage :v",
  },
  {
    question: "Tôi có thể tùy chỉnh màu sắc không?",
    answer: "Màu sắc được tự động phân tích từ ảnh bìa truyện, tuy nhiên bạn có thể điều chỉnh một số cài đặt trong phần 'Cài đặt Userscript'.",
  },
  {
    question: "Script có hoạt động trên tất cả các trình duyệt không?",
    answer: "Script được thiết kế để hoạt động trên các trình duyệt hỗ trợ Tampermonkey hoặc Violentmonkey.",
  },
    {
    question: "Tôi có thể sử dụng script này trên điện thoại không?",
    answer: "Có, script hoạt động trên cả trình duyệt di động hỗ trợ extension để cài đặt script manager.",
  },
    {
    question: "Vậy trình duyệt nào hỗ trợ extension trên điện thoại?",
    answer: "Hmm... Android bên chromium thì có Kiwi Browser, Yandex Browser, v.v... Còn iOS thì có iCab Mobile, Aloha Browser, v.v...",
  },
    {
    question: "Làm thế nào để tắt script nếu tôi không muốn sử dụng nữa?",
    answer: "Bạn có thể tắt hoặc gỡ bỏ script thông qua dashboard của Tampermonkey/Violentmonkey.",
  }
];

function hexToHsl(hex: string): string | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}


function ColorPicker({ setColor }: { setColor: (color: string) => void }) {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const hslColor = hexToHsl(e.target.value);
      if (hslColor) {
          setColor(hslColor);
      }
  };

  return (
    <div className="flex justify-center">
      <div className="relative size-8">
        <input
            type="color"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleColorChange}
            aria-label="Custom color picker"
        />
        <div className="w-full h-full rounded-full border flex items-center justify-center bg-transparent pointer-events-none">
            <Paintbrush className="size-4" />
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const setAccentColor = (color: string) => {
    document.documentElement.style.setProperty('--accent', color);
    document.documentElement.style.setProperty('--primary', color);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-5" />
                  <span className="sr-only">Mở menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex-1">
                  <div className="grid gap-4 py-4">
                    <Link href="#features" className="text-muted-foreground">
                      Tính năng
                    </Link>
                    <Link href="#screenshots" className="text-muted-foreground">
                      Ảnh chụp màn hình
                    </Link>
                    <Link href="#installation" className="text-muted-foreground">
                      Cài đặt
                    </Link>
                    <Link href="#faq" className="text-muted-foreground">
                      Hỏi đáp
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center pb-4">
                  <Link href="https://github.com/sang765/HakoMonetTheme" target="_blank" rel="noopener noreferrer" className="text-muted-foreground">
                    <Github className="size-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center">
            <Link href="/" className="mr-2 flex items-center space-x-2">
              <Image
                  src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/logo.png"
                  width="24"
                  height="24"
                  alt="HakoMonet Logo"
                  className="rounded-full"
                />
              <span className="font-bold">Hako: Monet Theme</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-4 text-sm md:flex">
             <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
                Tính năng
              </Link>
              <Link href="#screenshots" className="text-muted-foreground transition-colors hover:text-foreground">
                Ảnh chụp màn hình
              </Link>
              <Link href="#installation" className="text-muted-foreground transition-colors hover:text-foreground">
                Cài đặt
              </Link>
              <Link href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
                Hỏi đáp
              </Link>
          </nav>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Palette className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4">
                <ColorPicker setColor={setAccentColor} />
              </PopoverContent>
            </Popover>
            <Button variant="outline" size="icon" onClick={handleThemeChange}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40">
           <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-background"/>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <Image
                src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/logo.png"
                alt="HakoMonet Theme Logo"
                width={128}
                height={128}
                className="mx-auto"
              />
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hako: Monet Theme
              </h1>
              <p className="font-body text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
                 <span className="line-through">Material You theme dành cho Hako/DocLN.</span><br/>
                 <strong className="text-primary">KHÔNG CHỈ ĐƠN GIẢN LÀ MỘT THEME. NÓ CÒN HƠN THẾ NỮA!!!</strong>
              </p>
                <div className="flex justify-center gap-2 flex-wrap">
                    <img src="https://img.shields.io/badge/Tampermonkey-Supported-green.svg" alt="Tampermonkey Supported" />
                    <img src="https://img.shields.io/badge/Violentmonkey-Supported-green.svg" alt="Violentmonkey Supported" />
                    <a href="./LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License MIT" /></a>
                    <a href="https://discord.gg/uvQ6A3CDPq" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/discord/1201419657282863104?style=for-the-badge&logo=discord&logoColor=%23fff&logoSize=25&label=Tham%20gia%20Discord&color=%235865f2" alt="Discord" />
                    </a>
                </div>

              <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="https://sang765.github.io/HakoMonetTheme/HakoMonetTheme.user.js" target="_blank" rel="noopener noreferrer">
                    <Download />
                    Cài đặt ngay
                  </Link>
                </Button>
                 <Button asChild size="lg" variant="secondary" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="https://github.com/sang765/HakoMonetTheme" target="_blank" rel="noopener noreferrer">
                    <Github />
                    Xem trên GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-card/50 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  🌟 Tính năng 🌟
                </h2>
                <p className="font-body max-w-2xl mx-auto text-muted-foreground md:text-lg">
                  Khám phá các tính năng chính giúp Hako: Monet Theme trở nên đặc biệt.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <Card key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      {feature.icon}
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

         {/* Screenshots Section */}
        <section id="screenshots" className="w-full py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  🖼️ Ảnh chụp màn hình 🖼️
                </h2>
                <p className="font-body max-w-2xl mx-auto text-muted-foreground md:text-lg">
                  Xem qua một vài hình ảnh về giao diện của Hako: Monet Theme.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                 <Card className="overflow-hidden"><CardContent className="p-0"><Image src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/home-theme-preview.webp" width={600} height={400} alt="Homepage Preview" className="w-full h-auto" /></CardContent><CardHeader><CardTitle>Trang chủ</CardTitle></CardHeader></Card>
                 <Card className="overflow-hidden"><CardContent className="p-0"><Image src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/info-truyen-theme-preview.webp" width={600} height={400} alt="Novel Info Preview" className="w-full h-auto" /></CardContent><CardHeader><CardTitle>Trang thông tin truyện</CardTitle></CardHeader></Card>
                 <Card className="overflow-hidden"><CardContent className="p-0"><Image src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/desktop-settings.webp" width={600} height={400} alt="Settings Preview" className="w-full h-auto" /></CardContent><CardHeader><CardTitle>Cài đặt Userscript</CardTitle></CardHeader></Card>
                 <Card className="overflow-hidden"><CardContent className="p-0"><Image src="https://www.tampermonkey.net/images/chrome_extensions.jpg" width={600} height={400} alt="Chrome Extensions" className="w-full h-auto" /></CardContent><CardHeader><CardTitle>Trang extension</CardTitle></CardHeader></Card>
                 <Card className="overflow-hidden"><CardContent className="p-0"><Image src="https://www.tampermonkey.net/images/developer_mode.jpg" width={600} height={400} alt="Developer Mode" className="w-full h-auto" /></CardContent><CardHeader><CardTitle>Bật Developer Mode</CardTitle></CardHeader></Card>
                 <Card className="overflow-hidden"><CardContent className="p-0"><Image src="https://www.tampermonkey.net/images/userscripts_toggle.png" width={600} height={400} alt="Allow file URLs" className="w-full h-auto" /></CardContent><CardHeader><CardTitle>Cho phép truy cập tệp</CardTitle></CardHeader></Card>
              </div>
            </div>
          </div>
        </section>


        {/* Installation Section */}
        <section id="installation" className="w-full py-16 md:py-24 bg-card/50 border-t">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-5xl space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                            📦 Cài đặt 📦
                        </h2>
                        <p className="font-body max-w-2xl mx-auto text-muted-foreground md:text-lg">
                            Làm theo các bước đơn giản sau để cài đặt và trải nghiệm.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground">1</span>Cài đặt Extension</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Cài đặt một userscript manager cho trình duyệt của bạn.</p>
                                <div className="mt-4 space-y-2">
                                    <Button asChild variant="outline" className="w-full justify-between">
                                        <Link href="https://www.tampermonkey.net/" target="_blank" rel="noopener noreferrer">Tampermonkey <ArrowRight /></Link>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full justify-between">
                                        <Link href="https://violentmonkey.github.io/get-it/" target="_blank" rel="noopener noreferrer">Violentmonkey <ArrowRight /></Link>
                                    </Button>
                                </div>
                                 <Card className="mt-4">
                                  <CardContent className="p-4">
                                    <p className="text-sm text-muted-foreground">Nếu bạn sử dụng Tampermonkey (Manifest V3) trên Chromium 138+, bạn cần bật Developer Mode và cấp quyền truy cập tệp.</p>
                                    <Link href="https://www.tampermonkey.net/faq.php?locale=en#Q209" target="_blank" className="text-sm text-primary hover:underline">Đọc thêm</Link>
                                  </CardContent>
                                </Card>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader>
                                <CardTitle className="flex items-center gap-2"><span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground">2</span>Cài đặt Script</CardTitle>
                            </CardHeader>
                            <CardContent>
                                 <p>Nhấp vào nút bên dưới và chọn "Install".</p>
                                <div className="mt-4">
                                     <Button asChild className="w-full">
                                        <Link href="https://sang765.github.io/HakoMonetTheme/HakoMonetTheme.user.js" target="_blank" rel="noopener noreferrer">Cài đặt Hako: Monet Theme</Link>
                                    </Button>
                                </div>
                                <Image src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/Install_us.jpg" width={400} height={200} alt="Install Userscript" className="mt-4 rounded-md border" />
                            </CardContent>
                        </Card>
                         <Card>
                             <CardHeader>
                                <CardTitle className="flex items-center gap-2"><span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground">3</span>Cấp quyền</CardTitle>
                            </CardHeader>
                            <CardContent>
                                 <p>Khi được hỏi, hãy chọn "Always allow domain" để script hoạt động.</p>
                                <Image src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/userscript_asking.jpg" width={400} height={200} alt="Allow Domain" className="mt-4 rounded-md border" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        {/* Technical Features Section */}
        <section id="tech-features" className="w-full py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  🔧 Chi tiết kỹ thuật 🔧
                </h2>
                <p className="font-body max-w-2xl mx-auto text-muted-foreground md:text-lg">
                  Các công nghệ và phương pháp cốt lõi đằng sau Hako: Monet Theme.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {technicalFeatures.map((feature, index) => (
                  <Card key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      {feature.icon}
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="w-full py-16 md:py-24 bg-card/50 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                🔒 Quyền riêng tư & Thu thập dữ liệu 🔒
              </h2>
              <p className="font-body text-muted-foreground md:text-lg">
                Sự riêng tư của bạn là ưu tiên hàng đầu của chúng tôi. Script này được thiết kế để hoạt động hoàn toàn trong trình duyệt của bạn mà không thu thập bất kỳ dữ liệu cá nhân nào.
              </p>
               <Card className="text-left">
                    <CardContent className="p-6 space-y-4">
                        <p className="flex items-start gap-4"><ShieldCheck className="size-6 text-green-500 mt-1 shrink-0" /><span>Script hoạt động hoàn toàn trong trình duyệt của bạn và không gửi bất kỳ dữ liệu nào ra ngoài.</span></p>
                        <p className="flex items-start gap-4"><ShieldCheck className="size-6 text-green-500 mt-1 shrink-0" /><span>Phân tích màu sắc từ ảnh bìa truyện được thực hiện cục bộ bằng Canvas API.</span></p>
                        <p className="flex items-start gap-4"><ShieldCheck className="size-6 text-green-500 mt-1 shrink-0" /><span>Cài đặt người dùng được lưu trữ cục bộ thông qua bộ nhớ của Tampermonkey/Violentmonkey.</span></p>
                        <p className="flex items-start gap-4"><ShieldCheck className="size-6 text-green-500 mt-1 shrink-0" /><span>Cookie chỉ được sử dụng cho các tính năng cụ thể và không chứa thông tin cá nhân.</span></p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                   ❓ Hỏi đáp thường gặp ❓
                </h2>
                 <p className="font-body text-muted-foreground md:text-lg">
                  ...mà không ai hỏi :)))
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Update and Issues Section */}
        <section id="updates" className="w-full py-16 md:py-24 bg-card/50 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl mb-4">🔄 Cập nhật 🔄</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>Script sẽ tự động kiểm tra cập nhật mỗi 30 phút. Bạn cũng có thể kiểm tra thủ công:</p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Mở dashboard của Tampermonkey/Violentmonkey</li>
                            <li>Tìm script "Hako: Monet Theme"</li>
                            <li>Nhấn "Check for updates"</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl mb-4">🐛 Báo cáo lỗi & Đề xuất 🐛</h2>
                     <div className="space-y-4 text-muted-foreground">
                        <p>Nếu bạn gặp vấn đề hoặc có đề xuất cải tiến, vui lòng:</p>
                         <ol className="list-decimal list-inside space-y-2">
                            <li>Mô tả chi tiết vấn đề hoặc ý tưởng của bạn.</li>
                            <li>Kèm theo screenshot nếu có thể.</li>
                        </ol>
                         <Button asChild className="mt-4">
                            <Link href="https://github.com/sang765/HakoMonetTheme/issues" target="_blank" rel="noopener noreferrer">Tạo issue mới</Link>
                        </Button>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Usage Guide Section */}
        <section id="usage" className="w-full py-16 md:py-24 border-t">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">📖 Hướng dẫn sử dụng 📖</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader><CardTitle>Với người dùng phổ thông</CardTitle></CardHeader>
                        <CardContent>
                            <p>Chỉ cần vào trang web và tận hưởng thành quả. Nếu cần update màu theme chỉ cần mở script manager extension của bạn lên rồi click "Menu chính &gt; Cài đặt".</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Với developer và phát triển repository</CardTitle></CardHeader>
                        <CardContent>
                             <p>Vui lòng đọc các hướng dẫn sau:</p>
                             <div className="mt-4 space-y-2">
                                <Button asChild variant="outline" className="w-full justify-between"><Link href="https://github.com/sang765/HakoMonetTheme/blob/main/docs/monet-api-guide.md" target="_blank">Hướng dẫn API chung <ArrowRight /></Link></Button>
                                <Button asChild variant="outline" className="w-full justify-between"><Link href="https://github.com/sang765/HakoMonetTheme/blob/main/docs/monet-api-v1-guide.md" target="_blank">Hướng dẫn MonetAPI v1 <ArrowRight /></Link></Button>
                                <Button asChild variant="outline" className="w-full justify-between"><Link href="https://github.com/sang765/HakoMonetTheme/blob/main/docs/monet-api-v2-guide.md" target="_blank">Hướng dẫn MonetAPI v2 <ArrowRight /></Link></Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-6 border-t bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
                 <p className="text-sm text-muted-foreground">Showcase for Hako: Monet Theme by <Link href="https://github.com/sang765" target="_blank" className="font-medium hover:underline">sang765</Link>.</p>
                 <p className="text-xs text-muted-foreground">Lưu ý: Script này không chính thức liên kết với Hako/DocLN và được phát triển độc lập bởi cộng đồng.</p>
            </div>
            <div className="text-center text-sm text-muted-foreground">
                 <p>Built with Next.js, shadcn/ui, and Tailwind CSS. Thanks to the contributors and community for their ideas and bug reports.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
