import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export function RentalDetails() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Details Rental</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div>
                    <div className="aspect-[16/9] rounded-lg bg-gray-200" />
                    <div className="h-full w-full bg-[url('/map.jpg')]" />
                </div>


                <div className="space-y-4">
                    <div>
                        <h3 className="mb-2 font-semibold">Pick - Up</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Locations</label>
                                <Select defaultValue="kota-semarang">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kota-semarang">Kota Semarang</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Date</label>
                                <Select defaultValue="20-july">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select date" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="20-july">20 July 2022</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Time</label>
                                <Select defaultValue="07-00">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="07-00">07:00</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Drop - Off</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Locations</label>
                                <Select defaultValue="kota-semarang">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kota-semarang">Kota Semarang</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Date</label>
                                <Select defaultValue="21-july">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select date" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="21-july">21 July 2022</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Time</label>
                                <Select defaultValue="01-00">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="01-00">01:00</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-500">Total Rental Price</div>
                            <div className="text-xs text-gray-400">Overall price and includes rental discount</div>
                        </div>
                        <div className="text-2xl font-bold">$80.00</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

