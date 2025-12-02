# Claude Code Session Notes - Maviyolculukgezisi

## Server Details
- **Server IP:** 134.209.137.11
- **User:** maviyolculukgezisi
- **Port:** 3007
- **Domain:** maviyolculukgezisi.com
- **App Location:** /home/maviyolculukgezisi/maviyolculukgezisi

## Deploy Command
```bash
ssh maviyolculukgezisi@134.209.137.11 "cd ~/maviyolculukgezisi && git pull && source ~/.nvm/nvm.sh && npm install && npm run build && pm2 restart maviyolculukgezisi"
```

## Database
- **Host:** 134.209.137.11
- **Database:** maviyolculukgezisi
- **User:** maviyolculukgezisi
- **Password:** Sk235672.-Yt

## Related Projects
- holidaygulet.com (port 3005) - holidayyachts repo
- kayalarturistik.com (port 3006) - lighttours repo

## Local Development Notes
- **Dev server port:** 3000
- **Kill port 3000 only (Windows):** `npx kill-port 3000` or `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`
- **IMPORTANT:** Never use `taskkill /F /IM node.exe` - this kills Claude Code as well!

## TravelQuoteBot Integration
- **TQB Server:** 134.209.137.11
- **TQB Port:** 3004
- **TQB User:** travelquotebot
- **TQB App Location:** /home/travelquotebot/aipricing
- **TQB Database:** tqa_multi (user: tqa, password: Dlr235672.-Yt)
- **Organization ID:** 17 (Mavi Yolculuk Gezisi)

### TravelQuoteBot Admin Login
- **URL:** https://travelquotebot.com (or http://134.209.137.11:3004)
- **Email:** admin@maviyolculukgezisi.com
- **Password:** Sk235672.-Yt

### Integration Flow
1. Customer submits booking on maviyolculukgezisi.com
2. API saves to local MySQL (backup) + creates Quote in TQB
3. Manage bookings via TravelQuoteBot admin panel
4. TQB handles: quotes, confirmations, payments tracking

### TQB API Details
- **API Endpoint:** http://134.209.137.11:3004/api/external/yacht-quote
- **API Key:** myg_live_sk_7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a
- **Yachts in TQB:** Holiday 10 (id:1), Holiday 5 (id:2), Holiday 6 (id:3), Holiday M (id:4)
