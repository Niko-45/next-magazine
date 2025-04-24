"use client";

import { useState, useEffect } from "react";
import { Star, Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "electronics" | "home" | "medicine" | "sports";

type FilterState = {
  categories: Category[];
  brands: string[];
  features: string[];
  priceRange: {
    min: number;
    max: number;
  };
  condition: "any" | "refurbished" | "brandNew" | "old";
  ratings: number | null;
};

export default function HomeLayout() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    features: [],
    priceRange: { min: 0, max: 9999 },
    condition: "any",
    ratings: null,
  });

  const [expanded, setExpanded] = useState({
    brands: false,
    features: false,
    priceRange: false,
    condition: false,
    ratings: false,
  });

  const [priceRangeState, setPriceRangeState] = useState(filters.priceRange);
  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    { id: "all" as const, label: "All products" },
    { id: "electronics" as const, label: "Electronics" },
    { id: "home" as const, label: "Home & Lifestyle" },
    { id: "medicine" as const, label: "Medicine" },
    { id: "sports" as const, label: "Sports & Outdoor" },
  ];

  const brands = [
    { id: "samsung", label: "Samsung" },
    { id: "apple", label: "Apple" },
    { id: "huawei", label: "Huawei" },
    { id: "poco", label: "Poco" },
    { id: "lenovo", label: "Lenovo" },
  ];

  const features = [
    { id: "metallic", label: "Metallic" },
    { id: "plasticCover", label: "Plastic cover" },
    { id: "8gbRam", label: "8GB Ram" },
    { id: "superPower", label: "Super power" },
    { id: "largeMemory", label: "Large Memory" },
  ];

  const conditions = [
    { id: "any" as const, label: "Any" },
    { id: "refurbished" as const, label: "Refurbished" },
    { id: "brandNew" as const, label: "Brand new" },
    { id: "old" as const, label: "Old Items" },
  ];

  const ratings = [5, 4, 3, 2, 1];
  const MAX_PRICE = 9999;

  useEffect(() => {
    if (!isDragging) {
      setFilters(prev => ({ ...prev, priceRange: priceRangeState }));
    }
  }, [priceRangeState, isDragging]);

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterSection = ({
    title,
    isExpanded,
    onToggle,
    showSeeAll = false,
    children,
  }: {
    title: string;
    isExpanded: boolean;
    onToggle: () => void;
    showSeeAll?: boolean;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-border pb-4">
      <div className="flex items-center justify-between cursor-pointer py-2" onClick={onToggle}>
        <h3 className="font-medium text-sm">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isExpanded ? "max-h-96" : "max-h-0"
      )}>
        <div className="pt-2 space-y-2">
          {children}
          {showSeeAll && (
            <button className="text-xs text-[#ff385c] hover:underline mt-1 transition-colors">
              See all
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating 
              ? "text-[#FF9900] fill-[#FF9900]" 
              : "text-muted stroke-muted"
          }`}
        />
      ))}
    </div>
  );

  const minPercentage = (priceRangeState.min / MAX_PRICE) * 100;
  const maxPercentage = (priceRangeState.max / MAX_PRICE) * 100;

  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-80 p-4 border-r border-border">
        <div className="space-y-4">
          {/* Categories */}
          <div className="border-b border-border pb-4">
            <h3 className="font-medium text-sm mb-2">Category</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => {
                      if (filters.categories.includes(category.id)) {
                        setFilters(prev => ({
                          ...prev,
                          categories: prev.categories.filter(c => c !== category.id)
                        }));
                      } else {
                        setFilters(prev => ({
                          ...prev,
                          categories: [...prev.categories, category.id]
                        }));
                      }
                    }}
                    className={`w-full text-left text-sm py-1 transition-colors ${
                      filters.categories.includes(category.id)
                        ? "text-[#ff385c] font-medium"
                        : "text-foreground hover:text-[#ff385c]"
                    }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
              <li>
                <button className="text-xs text-[#ff385c] hover:underline mt-1 transition-colors">
                  See all
                </button>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <FilterSection
            title="Brands"
            isExpanded={expanded.brands}
            onToggle={() => toggleSection("brands")}
            showSeeAll
          >
            <div className="space-y-2">
              {brands.map((brand) => (
                <label key={brand.id} className="flex items-center space-x-2 cursor-pointer group">
                  <div 
                    className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${
                      filters.brands.includes(brand.id)
                        ? "bg-primary border-primary"
                        : "border-input bg-background group-hover:border-primary/50"
                    }`}
                    onClick={() => {
                      if (filters.brands.includes(brand.id)) {
                        setFilters(prev => ({
                          ...prev,
                          brands: prev.brands.filter(b => b !== brand.id)
                        }));
                      } else {
                        setFilters(prev => ({
                          ...prev,
                          brands: [...prev.brands, brand.id]
                        }));
                      }
                    }}
                  >
                    {filters.brands.includes(brand.id) && (
                      <Check className="h-3 w-3 text-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm">{brand.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Features */}
          <FilterSection
            title="Features"
            isExpanded={expanded.features}
            onToggle={() => toggleSection("features")}
            showSeeAll
          >
            <div className="space-y-2">
              {features.map((feature) => (
                <label key={feature.id} className="flex items-center space-x-2 cursor-pointer group">
                  <div 
                    className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${
                      filters.features.includes(feature.id)
                        ? "bg-primary border-primary"
                        : "border-input bg-background group-hover:border-primary/50"
                    }`}
                    onClick={() => {
                      if (filters.features.includes(feature.id)) {
                        setFilters(prev => ({
                          ...prev,
                          features: prev.features.filter(f => f !== feature.id)
                        }));
                      } else {
                        setFilters(prev => ({
                          ...prev,
                          features: [...prev.features, feature.id]
                        }));
                      }
                    }}
                  >
                    {filters.features.includes(feature.id) && (
                      <Check className="h-3 w-3 text-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm">{feature.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Price Range */}
          <FilterSection
            title="Price range"
            isExpanded={expanded.priceRange}
            onToggle={() => toggleSection("priceRange")}
          >
            <div className="space-y-6">
              <div className="relative h-1 bg-muted rounded-full mt-6">
                <div
                  className="absolute h-full bg-[#ff385c] rounded-full"
                  style={{
                    left: `${minPercentage}%`,
                    width: `${maxPercentage - minPercentage}%`,
                  }}
                />
                
                <div
                  className={cn(
                    "absolute w-4 h-4 bg-white border border-[#ff385c] rounded-full -mt-1.5 transform -translate-x-1/2 cursor-pointer shadow-sm hover:shadow-md transition",
                    isDragging && "ring-2 ring-[#ff385c]/30"
                  )}
                  style={{ left: `${minPercentage}%` }}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                />
                
                <div
                  className={cn(
                    "absolute w-4 h-4 bg-white border border-[#ff385c] rounded-full -mt-1.5 transform -translate-x-1/2 cursor-pointer shadow-sm hover:shadow-md transition",
                    isDragging && "ring-2 ring-[#ff385c]/30"
                  )}
                  style={{ left: `${maxPercentage}%` }}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                />
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground block mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    max={MAX_PRICE}
                    value={priceRangeState.min}
                    onChange={(e) => {
                      const newMin = Math.min(parseInt(e.target.value) || 0, priceRangeState.max);
                      setPriceRangeState(prev => ({ ...prev, min: newMin }));
                    }}
                    className="w-full border border-input rounded p-2 text-sm"
                    placeholder="Min"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground block mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    max={MAX_PRICE}
                    value={priceRangeState.max}
                    onChange={(e) => {
                      const newMax = Math.max(parseInt(e.target.value) || 0, priceRangeState.min);
                      setPriceRangeState(prev => ({ ...prev, max: Math.min(newMax, MAX_PRICE) }));
                    }}
                    className="w-full border border-input rounded p-2 text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>
              
              <button
                onClick={() => setFilters(prev => ({ ...prev, priceRange: priceRangeState }))}
                className="w-full py-2 bg-[#ff385c] text-white rounded transition hover:bg-[#ff385c]/90 focus:outline-none focus:ring-2 focus:ring-[#ff385c]/50"
              >
                Apply
              </button>
            </div>
          </FilterSection>

          {/* Condition */}
          <FilterSection
            title="Condition"
            isExpanded={expanded.condition}
            onToggle={() => toggleSection("condition")}
          >
            <div className="space-y-2">
              {conditions.map((condition) => (
                <label key={condition.id} className="flex items-center space-x-2 cursor-pointer">
                  <div className="flex items-center justify-center h-4 w-4 rounded-full border border-input">
                    <input
                      type="radio"
                      name="condition"
                      checked={filters.condition === condition.id}
                      onChange={() => setFilters(prev => ({ ...prev, condition: condition.id }))}
                      className="sr-only"
                    />
                    {filters.condition === condition.id && (
                      <div className="h-2 w-2 rounded-full bg-[#ff385c]" />
                    )}
                  </div>
                  <span className="text-sm">{condition.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Ratings */}
          <FilterSection
            title="Ratings"
            isExpanded={expanded.ratings}
            onToggle={() => toggleSection("ratings")}
          >
            <div className="space-y-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer group">
                  <div className="flex items-center justify-center h-4 w-4 rounded border border-input">
                    <input
                      type="checkbox"
                      checked={filters.ratings === rating}
                      onChange={() => setFilters(prev => ({
                        ...prev,
                        ratings: prev.ratings === rating ? null : rating
                      }))}
                      className="sr-only"
                    />
                    {filters.ratings === rating && (
                      <div className="h-2 w-2 rounded bg-[#ff385c]" />
                    )}
                  </div>
                  <div className="flex items-center">
                    <StarRating rating={rating} />
                    {rating < 5 && (
                      <span className="text-sm text-muted-foreground ml-1 group-hover:text-foreground">
                        & up
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Products</h1>
        <div className="p-4 border border-border rounded-md bg-card">
          <p className="text-muted-foreground">
            Applied filters will be reflected here. Products would be displayed in this area.
          </p>
          <pre className="mt-4 p-4 bg-muted rounded-md text-xs overflow-auto">
            {JSON.stringify(filters, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}