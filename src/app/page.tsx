"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Palette, Sparkles, Sun, Moon, LayoutTemplate, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const features = [
  {
    icon: <Palette className="size-8 text-primary" />,
    title: "Dynamic Theming",
    description: "Automatically generates a color palette from your wallpaper, ensuring a cohesive and personal look.",
  },
  {
    icon: <Sparkles className="size-8 text-primary" />,
    title: "Material You Inspired",
    description: "Embraces the principles of Material You, with expressive shapes, colors, and motion.",
  },
  {
    icon: <Sun className="size-8 text-primary" />,
    title: "Light & Dark Modes",
    description: "Beautifully crafted light and dark themes that are easy on the eyes, day or night.",
  },
  {
    icon: <LayoutTemplate className="size-8 text-primary" />,
    title: "Clean & Modern UI",
    description: "A focus on spacious layouts and clear typography for a clutter-free and intuitive user experience.",
  },
];

const colors = [
  { name: 'Default', hsl: '221.2 83.2% 53.3%' },
  { name: 'Orange', hsl: '26 83.2% 53.3%' },
  { name: 'Green', hsl: '142.1 76.2% 36.3%' },
  { name: 'Rose', hsl: '346.8 77.2% 49.8%' },
  { name: 'Violet', hsl: '262.1 83.3% 57.8%' },
];

function ColorPicker({ setColor }: { setColor: (color: string) => void }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <Button
          key={color.name}
          variant="outline"
          size="icon"
          className="size-8 rounded-full"
          style={{ backgroundColor: `hsl(${color.hsl})` }}
          onClick={() => setColor(color.hsl)}
          aria-label={`Set color to ${color.name}`}
        />
      ))}
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
          <div className="mr-4 flex items-center">
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
          <div className="flex-1" />
          <div className="flex items-center gap-2">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="grid gap-4 py-4">
                   <Link href="#features" className="text-muted-foreground">
                    Features
                  </Link>
                  <Link href="https://github.com/sang765/HakoMonetTheme" target="_blank" rel="noopener noreferrer" className="text-muted-foreground">
                    GitHub
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
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
           <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 to-background dark:from-sky-900/20"/>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <Image
                src="https://raw.githubusercontent.com/sang765/HakoMonetTheme/main/.github/assets/logo.png"
                alt="HakoMonet Theme Logo"
                width={128}
                height={128}
                className="mx-auto mb-4"
              />
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                HakoMonet Theme
              </h1>
              <p className="font-body text-lg text-muted-foreground md:text-xl">
                A modern, dynamic theme inspired by Material Design 3, bringing personalized color palettes to your projects.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="https://github.com/sang765/HakoMonetTheme" target="_blank" rel="noopener noreferrer">
                    <Github />
                    View on GitHub
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
                  Core Features
                </h2>
                <p className="font-body max-w-2xl mx-auto text-muted-foreground md:text-lg">
                  Discover the key characteristics that make HakoMonet a joy to use.
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
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>Showcase for HakoMonetTheme by sang765. Built with Next.js and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  );
}
