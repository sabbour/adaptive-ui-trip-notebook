# Trip Notebook

An AI-powered **travel planning assistant** built with the [Adaptive UI Framework](https://github.com/sabbour/adaptive-ui-framework). A conversational agent helps you plan trips with real flight data, maps, weather, and a living trip scrapbook.

## What It Does

The Travel Notebook is a conversational AI agent that acts as a friendly travel concierge. It follows a natural planning flow:

1. **Greet** — Asks where you're dreaming of going
2. **Discover** — Learns your travel style, dates, budget, and preferences over 2–3 turns
3. **Suggest** — Proposes destinations with photo cards, country info, and weather forecasts (or responds to a specific pick)
4. **Plan** — Builds a day-by-day itinerary with route maps, real restaurant/hotel recommendations via Google Places, and flight search
5. **Budget** — Tracks estimated costs by category (flights, hotel, food, activities)
6. **Finalize** — Generates a downloadable itinerary summary, packing checklist, and currency converter

## Layout

The app uses a three-panel layout:

- **Left panel** — Session sidebar for managing multiple trip planning sessions
- **Center panel** — Conversational chat with the AI travel agent
- **Right panel** — Trip Notebook, a tabbed scrapbook that auto-collects data from the conversation:
  - **Overview** — Destinations, photos, weather
  - **Itinerary** — Day-by-day activities
  - **Travel** — Flights and hotels
  - **Budget** — Cost breakdown by category
  - **Packing** — Checklists

## Packs Used

| Pack | Purpose |
|------|---------|
| [@sabbour/adaptive-ui-travel-data-pack](https://github.com/sabbour/adaptive-ui-travel-data-pack) | Weather forecasts, country info, currency conversion, checklists, budget tracking |
| [@sabbour/adaptive-ui-google-maps-pack](https://github.com/sabbour/adaptive-ui-google-maps-pack) | Embedded maps, place search, nearby discovery with photos, destination hero images |
| [@sabbour/adaptive-ui-google-flights-pack](https://github.com/sabbour/adaptive-ui-google-flights-pack) | Live flight search results and Google Flights deep links |

## Running Locally

```bash
npm install
npm run dev
```

Click the gear icon to connect your OpenAI-compatible LLM endpoint and configure API keys for Google Maps and the CORS proxy (for live flight results).

For local pack development, symlink local checkouts:

```bash
npm run link:packs
```

## License

MIT
