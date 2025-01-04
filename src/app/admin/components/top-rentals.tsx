import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonutChart } from "@tremor/react"

const cities = [
    {
        name: "Sport Car",
        value: 17439,
    },
    {
        name: "SUV",
        value: 9478,
    },
    {
        name: "Coupe",
        value: 18197,
    },
    {
        name: "Hatchback",
        value: 12510,
    },
    {
        name: "MPV",
        value: 14406,
    },
]

export function TopRentals() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Top 5 Car Rental</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative h-[200px]">
                    <DonutChart
                        data={cities}
                        category="value"
                        index="name"
                        valueFormatter={(value) => value.toLocaleString()}
                        className="h-[200px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-3xl font-bold"></div>
                            <div className="text-sm text-gray-500">Rental Car</div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 space-y-2">
                    {cities.map((city) => (
                        <div key={city.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <div className="text-sm">{city.name}</div>
                            </div>
                            <div className="font-medium">{city.value.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

