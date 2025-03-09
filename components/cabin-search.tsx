"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CabinSearchProps {
  onSearch?: (searchParams: {
    location: string;
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => void;
}

export function CabinSearch({ onSearch }: CabinSearchProps) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<number>(2);

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        location,
        checkIn,
        checkOut,
        guests,
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-background rounded-lg border border-border shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Finn din perfekte hytte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Sted</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="location"
                placeholder="Hvor vil du dra?"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="space-y-2">
            <Label htmlFor="check-in">Innsjekk</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-in"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Velg dato"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <Label htmlFor="check-out">Utsjekk</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-out"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Velg dato"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <Label htmlFor="guests">Gjester</Label>
            <Select
              value={guests.toString()}
              onValueChange={(value) => setGuests(parseInt(value))}
            >
              <SelectTrigger id="guests" className="w-full">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Velg antall gjester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Gjest</SelectItem>
                <SelectItem value="2">2 Gjester</SelectItem>
                <SelectItem value="3">3 Gjester</SelectItem>
                <SelectItem value="4">4 Gjester</SelectItem>
                <SelectItem value="5">5 Gjester</SelectItem>
                <SelectItem value="6">6+ Gjester</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full mt-6 h-12" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Søk etter hytter
        </Button>
      </div>
    </div>
  );
}
