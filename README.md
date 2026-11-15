🏁 Forza Horizon 6 Tuning App 🔧

🛠️ Build your perfect tune, then let the numbers and your seat-of-the-pants feel decide the rest.

An intelligent tune builder and analysis tool for Forza Horizon 6. Pick a tune type 🎯, choose your car 🚗, enter its stats 📊, set an acceptable range for each tuning parameter 🎚️, and the app scores how well your setup matches a recommended tune for that car and playstyle. It also learns from your ratings over time 🧠.

🧪 Beta. This project is in active development, and the recommendations are heuristics, not verified in-game results. Test every tune in the game before you trust it 🏎️.

⚠️ Unofficial. This is a fan-made project and is not affiliated with, endorsed by, or sponsored by Microsoft, Turn 10 Studios, or Playground Games. Forza and Forza Horizon are trademarks of their respective owners.

✨ Features
  🏁 Eight tune types: Max Speed 🚀, Drag Racing ⚡, Circuit Racing 🏎️, All-Around ⭐, Grip 🔄, Rally 🏔️, Off-Road 🛞, and Drift 💨. Each has its own recommended values and parameter weights.
  🔍 Car library: Search by make, model, type, or PI class. You can also add your own custom cars ➕.
    📈 Car-aware recommendations: Enter stock stats like horsepower 🐎, torque, weight ⚖️, weight distribution, drivetrain, top speed, 0–60 and 0–100 times ⏱️, lateral G, aero balance, and aero efficiency. The app adjusts the targets for that car. An AWD car gets different differential and center-balance values than an RWD car, and a heavy car gets stiffer springs and higher tire pressure 🛞.
  🎚️ Range-based tuning: Instead of a single value, you set a minimum and maximum for each parameter. Settings that don’t change the tune, like spring rates and ride height, are shown as 🔒 fixed.
  ⚙️ Transmission options: Choose ⚡ Electric (1-speed) or 4- to 10-speed gearboxes. Only the gears you pick show up in the tuning panel.
  💯 Scoring: Each parameter gets a 0–100 score based on how close the midpoint of your range is to the recommended value, with a small penalty for very wide ranges. Scores are weighted by importance and combined into an overall grade:
    🥇 S (90+)
    🥈 A (80+)
    🥉 B (70+)
    C (60+)
    D (50+)
    F (below 50)

🗂️ Category breakdown: Results are grouped by tires, suspension, aero, drivetrain, and more, so you can see exactly where to focus.
🗣️ Behavior feedback: After an analysis, tag how the car actually handles, like “Car Understeers” 😬, “Bad Launch” 🚦, “Car Locks the Tires” 🔒, or “Car Bounces / Too Stiff” 🦘. The app shifts the affected values and re-analyzes.
🧠 Learning from ratings: Rate the tune from 0 to 100 based on how it drives. When your rating is more than 15 points away from the app’s score, the app nudges its recommendations for that tune type. Learning is tracked separately for each tune type.
💾 Import and export: Save a tune as a JSON file to re-import later 📥, or as a plain-text report 📄 with car stats, parameter ranges, recommended values, and scores. You can also back up and restore your learning data.

📋 Requirements
  🌐 A modern browser: Chrome, Edge, Firefox, or Safari.
  🚫 No build step or server needed for the browser version.
🖥️ Optional: an Electron wrapper. If window.electronAPI is present, learning data is saved to data/learning.json on disk. Otherwise it’s stored in your browser’s localStorage.
🚀 Installation
📥 Clone or download this repository.

📂 Make sure these files are in the same folder:
  FH6Tuning.html
  cars.js
  res/FH6_Grueso.png
  
🖱️ Open FH6Tuning.html in your browser.

That’s it. You’re ready to tune 🔧.

🕹️ Usage
  🎯 Select a tune type. Pick the driving style you want to build for.
  🚗 Select a car. Search for it, or add a custom one.
  📊 Enter car stats. Fill in the stock specs from the in-game garage. Defaults cover anything you leave blank.
  🎚️ Set parameter ranges. Enter a minimum and maximum for each setting. A narrow range commits you to a specific value. A wide range gives you more room but a slightly lower score.
  ⚙️ Choose transmission. Select the gear count to match the car.
  🧮 Analyze. Review the overall score, category grades, and the full parameter table with recommended values.
  ⭐ Give feedback. Rate the tune and tag any handling issues, then re-analyze. Back up or restore your learning data any time.
  💾 Export. Save as JSON to re-import later, or as TXT to share or keep as a record.

🧮 How the Scoring Works
  🎯 Recommended values come from a per-tune-type profile, adjusted for the car’s stats: drivetrain, power, weight, weight distribution, top speed, and more.
  📏 Parameter score measures the distance between the midpoint of your range and the recommended value, as a percentage of that parameter’s full range.
  ⚖️ Overall score is the weighted average of all parameter scores. Each tune type has its own weights, so a Drift tune prioritizes different settings than a Drag tune.
  🗣️ Behavior feedback adds fixed offsets to the affected parameters for the current analysis only.
  🧠 Learning adjusts the baseline recommendations over time based on your ratings. Adjustments are capped, so a handful of ratings can’t swing the values too far.

⚠️ Known Limitations
  🧪 Recommendations are heuristic and haven’t been verified against in-game physics.
  🚙 Car data is only as accurate as cars.js and the stats you enter.

🔒 Learning stays on your device. It isn’t shared between users.
📐 Parameter limits are the app’s own min and max values, which may not match the game’s exact limits.

🤝 Contributing

Issues and pull requests are welcome! 🎉 For changes to tune recommendations, please explain your reasoning and, if you can, share in-game test results 🏁.

📜 License

MIT © Heriberto Perez AKA Grueso

🙏 Credits
🎮 Forza Horizon 6 is developed by Playground Games and published by Xbox Game Studios.

⭐ If this helped you find your perfect tune, give the repo a star! ⭐
