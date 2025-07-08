
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Factory, Users, MapPin, Heart, Leaf, Award, Lightbulb } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            Welcome to Your New Journey
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Message */}
        <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-green-800 mb-2">
              Congratulations and Welcome! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-4">
              <p className="flex items-center justify-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <strong>You did it!</strong> After a competitive selection process, you've earned your place here, and we couldn't be more excited to have you join our team.
              </p>
              
              <p className="flex items-start justify-center gap-2 text-left">
                <Lightbulb className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>You're about to start an exciting new chapter filled with <strong>learning, growth, and purpose</strong>. Every day here is an opportunity to make a real difference while developing your skills and expanding your horizons.</span>
              </p>
              
              <p className="flex items-start justify-center gap-2 text-left">
                <Leaf className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Our company is on a <strong>mission to make the world cleaner and more sustainable</strong>, and now you're an essential part of that mission. Together, we're not just running a business – we're creating a better future for generations to come.</span>
              </p>
              
              <p className="flex items-start justify-center gap-2 text-left">
                <Users className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <span>Remember, <strong>you're not alone</strong> on this journey. You'll be surrounded by supportive colleagues who are here to help you succeed. It's perfectly okay to ask questions, try new things, make mistakes, and learn from them – that's how we all grow!</span>
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">📋 About Your Onboarding Materials</h3>
              <p className="text-blue-700">
                The materials you'll receive will help you get to know our company, processes, and amazing team. 
                They contain all the useful information you need to get started and feel confident in your new role.
              </p>
            </div>
            
            <div className="text-2xl font-bold text-green-700 pt-4">
              Welcome to the team – we're thrilled to have you here! 🌟
            </div>
          </CardContent>
        </Card>

        {/* Company Overview */}
        <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
              <Factory className="h-6 w-6" />
              About Our Company
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We are Estonia's leading environmental services company, dedicated to making our country cleaner and more sustainable through comprehensive waste management and recycling solutions. 
                  Operating across all of Estonia, our team of approximately 900 dedicated employees works tirelessly to protect our environment and create a circular economy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From collection and transport to processing and recycling, we handle the complete lifecycle of waste management, ensuring that materials are processed responsibly and efficiently.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl text-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-800">Estonia</div>
                    <div className="text-sm text-gray-600">Nationwide Coverage</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">~900</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-200 text-green-800">
                  Environmental Services Leader
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Structure */}
        <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 mb-2">Our Organization</CardTitle>
            <p className="text-gray-600">Discover how we're structured across Estonia to serve our mission</p>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Transport Column */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Transport</h3>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-center mb-3">
                    <h4 className="font-semibold text-gray-800 mb-2">3 Regions Coverage</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-800">Northern Region</span>
                    </div>
                    <div className="text-sm text-gray-600 ml-6">Key cities: Tallinn, Rakvere</div>
                    
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-800">Southern Region</span>
                    </div>
                    <div className="text-sm text-gray-600 ml-6">Key cities: Tartu, Pärnu</div>
                    
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-800">Eastern Region</span>
                    </div>
                    <div className="text-sm text-gray-600 ml-6">Coverage across eastern Estonia</div>
                  </div>
                </div>
                
                <Badge variant="outline" className="border-blue-300 text-blue-700">
                  Collection & Transport Services
                </Badge>
              </div>

              {/* Processing Column */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Processing (Käitlus)</h3>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-center mb-3">
                    <h4 className="font-semibold text-gray-800 mb-2">Central Processing Hub</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <span className="font-bold text-green-800 text-lg">SEKTO</span>
                        <div className="text-sm text-gray-600">Tallinn Processing Facility</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 text-center">
                      🏭 State-of-the-art processing and recycling facility
                    </div>
                  </div>
                </div>
                
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Waste Processing & Recycling
                </Badge>
              </div>

              {/* Support Services Column */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">Support Services</h3>
                  <div className="text-sm text-purple-600">(Tugiteenused)</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium text-purple-800">Sales & Customer Relations</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium text-purple-800">Human Resources</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium text-purple-800">Quality Assurance</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium text-purple-800">Government Tenders</span>
                    </div>
                  </div>
                </div>
                
                <Badge variant="outline" className="border-purple-300 text-purple-700">
                  Business Support Functions
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 text-green-700 font-medium">
            <Leaf className="h-5 w-5" />
            <span>Building a sustainable future, together</span>
            <Leaf className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
