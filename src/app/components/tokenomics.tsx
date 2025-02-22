import React, { useState } from "react";
import Image from "next/image";
import { AnimatedElement } from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Copy,
  Check,
  TrendingUp,
  Flame,
  Users,
  Coins,
  Info,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Tokenomics = () => {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "A5rpfBW96Ccv2edPBs8iinCK85EANXcES9SDxjojpump";

  const tokenMetrics = [
    {
      title: "Total Supply",
      value: "1 Billion",
      detail: "1,000,000,000",
    },
    {
      title: "Liquidity",
      value: "BURNT",
      detail: "100%",
    },
    {
      title: "Tax",
      value: "0/0",
      detail: "BUY and SELL",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="relative pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B42] via-blue-900/20 to-[#0E1B42] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <AnimatedElement>
          <div className="flex items-center justify-center gap-2 mb-16 pt-4 md:mb-24 lg:pt-24 p-4">
            <Image src="/tokenomics.png" width={500} height={500} alt="Logo" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-5 h-5 text-yellow-300/60 hover:text-yellow-300 transition-colors" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Detailed breakdown of token distribution and metrics
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </AnimatedElement>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column - Metrics */}
          <AnimatedElement className="space-y-6">
            {tokenMetrics.map((metric, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white/5 border-none hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br shadow-lg`}
                    >
                      <img
                        src="icon.PNG"
                        alt="Token Icon"
                        className="w-20 h-20"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium text-gray-200">
                          {metric.title}
                        </h3>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{metric.detail}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-400">{metric.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </AnimatedElement>

          {/* Right column - Image */}
          <AnimatedElement>
            <Image
              src="/cash-dog.PNG"
              alt="Token Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
          </AnimatedElement>
        </div>

        {/* Contract Address Card */}
        <AnimatedElement className="mt-8">
          <Card className="overflow-hidden bg-white/5 border-none hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-300">
                  Contract Address
                </h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-yellow-300/60 hover:text-yellow-300 transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Copy the contract address to interact with the token
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  value={contractAddress}
                  readOnly
                  className="bg-white/5 text-yellow-300 text-lg border-yellow-300/20 focus-visible:ring-yellow-300/20"
                />
                <Button
                  className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-blue-900 hover:opacity-90 transition-opacity"
                  onClick={copyToClipboard}
                >
                  {isCopied ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Tokenomics;
