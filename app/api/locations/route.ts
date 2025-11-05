import { getAllLocations } from "@/lib/locations";

export function GET() {
    const locations = getAllLocations();
    return Response.json(locations);
}
