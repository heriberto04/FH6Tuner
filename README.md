# 🏁 Forza Horizon 6 Tuning App 🔧

> 🛠️ **Build your perfect tune, then let the numbers and your seat-of-the-pants feel decide the rest.**

An intelligent tune builder and analysis tool for Forza Horizon 6. Pick a tune type 🎯, choose your car 🚗, enter its stats 📊, set an acceptable range for each tuning parameter 🎚️, and the app scores how well your setup matches a recommended tune for that car and playstyle. It also learns from your ratings over time 🧠.

> 🧪 **Beta.** This project is in active development, and the recommendations are heuristics, not verified in-game results. Test every tune in the game before you trust it 🏎️.

> ⚠️ **Unofficial.** This is a fan-made project and is not affiliated with, endorsed by, or sponsored by Microsoft, Turn 10 Studios, or Playground Games. *Forza* and *Forza Horizon* are trademarks of their respective owners.

---

## ✨ Features

- 🏁 **Eight tune types:** Max Speed 🚀, Drag Racing ⚡, Circuit Racing 🏎️, All-Around ⭐, Grip 🔄, Rally 🏔️, Off-Road 🛞, and Drift 💨.
- 🔍 **Car library:** Search by make, model, type, or PI class, or add your own custom cars ➕.
- 📈 **Car-aware recommendations:** Recommendations adjust to your car's horsepower 🐎, weight ⚖️, drivetrain, top speed, 0–60 and 0–100 times ⏱️, and aero stats.
- 🎚️ **Range-based tuning:** Set a minimum and maximum for each parameter. Settings that don't change the tune are shown as 🔒 fixed.
- ⚙️ **Transmission options:** Electric (1-speed) or 4- to 10-speed gearboxes.
- 💯 **Scoring:** Each parameter gets a 0–100 score, combined into an overall grade: 🥇 S (90+), 🥈 A (80+), 🥉 B (70+), C (60+), D (50+), F (below 50).
- 🗂️ **Category breakdown:** Results grouped by tires, suspension, aero, drivetrain, and more.
- 🗣️ **Behavior feedback:** Tag how the car handles, like "Car Understeers" 😬 or "Bad Launch" 🚦, and the app re-analyzes.
- 🧠 **Learning from ratings:** Ratings that differ a lot from the app's score adjust future recommendations for that tune type.
- 💾 **Import and export:** Save tunes as JSON 📥 or plain-text reports 📄, and back up learning data.

---

## 📋 Requirements

- 🌐 A modern browser: Chrome, Edge, Firefox, or Safari.
- 🚫 No build step or server needed.
- 🖥️ *Optional:* an Electron wrapper that saves learning data to `data/learning.json`.

---

## 🚀 Installation

1. 📥 Clone or download this repository.
2. 📂 Keep `FH6Tuning.html`, `cars.js`, and `res/FH6_Grueso.png` in the same folder.
3. 🖱️ Open `FH6Tuning.html` in your browser.

---

## 🕹️ Usage

1. 🎯 **Select a tune type.**
2. 🚗 **Select a car.**
3. 📊 **Enter car stats** from the in-game garage.
4. 🎚️ **Set parameter ranges.** Narrow ranges commit you to a value. Wide ranges give room but lower the score.
5. ⚙️ **Choose transmission.**
6. 🧮 **Analyze** and review the scores.
7. ⭐ **Give feedback** and re-analyze.
8. 💾 **Export** as JSON or TXT.

---

## 🗂️ Project Structure

```
.
├── FH6Tuning.html   # 🧩 App: markup, styles, and logic
├── cars.js          # 🚙 Car list (FH6_CARS array)
└── res/
    └── FH6_Grueso.png   # 🖼️ App image
```

---

## ⚠️ Known Limitations

- 🧪 Recommendations are heuristic and not verified against in-game physics.
- 🚙 Car data is only as accurate as `cars.js` and the stats you enter.
- 🔒 Learning stays on your device.

---

## 🙏 Credits

- 🎮 *Forza Horizon 6* is developed by Playground Games and published by Xbox Game Studios.

---

⭐ **If this helped you find your perfect tune, give the repo a star!** ⭐
