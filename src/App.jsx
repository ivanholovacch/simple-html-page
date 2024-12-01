import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Welcome to My React App
            </h1>
            <p className="text-center text-gray-600 mt-2">
              A simple yet elegant React application
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Heart 
                  className={`w-8 h-8 ${count > 0 ? 'text-red-500' : 'text-gray-400'}`}
                  fill={count > 0 ? 'currentColor' : 'none'}
                />
                <span className="text-xl font-semibold">{count}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCount(c => Math.max(0, c - 1))}
                  className="px-4"
                >
                  Decrease
                </Button>
                <Button
                  onClick={() => setCount(c => c + 1)}
                  className="px-4 bg-blue-500 hover:bg-blue-600"
                >
                  Increase
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;