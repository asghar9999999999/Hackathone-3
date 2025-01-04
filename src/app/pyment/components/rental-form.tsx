"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
export function RentalForm() {
    return (
        <form className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Billing Info</CardTitle>
                    <p className="text-sm text-gray-500">Please enter your billing info</p>
                    <p className="text-sm text-gray-500">Step 1 of 4</p>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="Address" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city">Town/City</Label>
                            <Input id="city" placeholder="Town/City" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Rental Info</CardTitle>
                    <p className="text-sm text-gray-500">Please select your rental date</p>
                    <p className="text-sm text-gray-500">Step 2 of 4</p>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="space-y-4">
                        <Label>Pick - Up</Label>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your city" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ny">New York</SelectItem>
                                    <SelectItem value="la">Los Angeles</SelectItem>
                                    <SelectItem value="ch">Chicago</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                    <SelectItem value="next">Next Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="9">9:00 AM</SelectItem>
                                <SelectItem value="10">10:00 AM</SelectItem>
                                <SelectItem value="11">11:00 AM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        <Label>Drop - Off</Label>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your city" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ny">New York</SelectItem>
                                    <SelectItem value="la">Los Angeles</SelectItem>
                                    <SelectItem value="ch">Chicago</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                    <SelectItem value="next">Next Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="9">9:00 AM</SelectItem>
                                <SelectItem value="10">10:00 AM</SelectItem>
                                <SelectItem value="11">11:00 AM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Payment Method</CardTitle>
                    <p className="text-sm text-gray-500">Please enter your payment method</p>
                    <p className="text-sm text-gray-500">Step 3 of 4</p>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="card" className="grid gap-4">
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex-1">Credit Card</Label>
                            <div className="flex space-x-2">
                                <Image
                                    src="/visa.jpeg"
                                    alt="Card image"
                                    width={30} // Replace with your image's width
                                    height={30} // Replace with your image's height
                                />                            
                                
                                <Image
                                    src="/card.png"
                                    alt="Card image"
                                    width={30} // Replace with your image's width
                                    height={30} // Replace with your image's height
                                />                            </div>
                        </div>
                        <div className="grid gap-4 pl-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="card-number">Card Number</Label>
                                    <Input id="card-number" placeholder="Card number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="expiry">Expiration Date</Label>
                                    <Input id="expiry" placeholder="MM/YY" />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="card-holder">Card Holder</Label>
                                    <Input id="card-holder" placeholder="Card holder" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex-1">PayPal</Label>
                            {/* <Image src="/paypals.png" alt="PayPal" className="h-6" /> */}
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                            <RadioGroupItem value="bitcoin" id="bitcoin" />
                            <Label htmlFor="bitcoin" className="flex-1">Bitcoin</Label>
                            {/* <Image src="/bit.png" alt="Bitcoin" className="h-6" /> */}
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Confirmation</CardTitle>
                    <p className="text-sm text-gray-500">We are getting to the end. Just few clicks and your rental is ready!</p>
                    <p className="text-sm text-gray-500">Step 4 of 4</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="marketing" />
                        <label
                            htmlFor="marketing"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree with sending an Marketing and newsletter emails. No spam promised!
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree with our terms and conditions and privacy policy.
                        </label>
                    </div>
                    <Link href = '/admin/components'><Button className="w-full" size="lg">
                        Rent Now
                    </Button>
                </Link>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span>All your data are safe</span>
                    </div>
                    <p className="text-xs text-center text-gray-500">
                        We are using the most advanced security to provide you the best experience ever.
                    </p>
                </CardContent>
            </Card>
        </form>
    )
}

