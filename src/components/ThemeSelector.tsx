import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          Themes
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className={theme === themeOption.name ? "bg-accent" : ""}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{themeOption.label}</span>
              <span className="text-xs text-muted-foreground">
                {themeOption.description}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}