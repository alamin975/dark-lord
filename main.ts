// The Tired Dark Lord: A 100-Word Villain Monologue — a fantasy villain who is
// secretly just very tired. The tiredness lives in the voice, the rhythm and
// the small deflections: ledgers, trumpets before breakfast, biscuits, a nap.
import * as fs from "node:fs";

const entry = "Heroes. You arrive at dawn, as always, sword first, questions later. I was up all night balancing the realm's grain ledgers — someone must, and it is never the chosen one. My scheme? A quieter throne room. Fewer trumpets before breakfast. The dragon sleeps; I envy the dragon. The minions unionised over biscuits; I gave in. Take the crown if you must, but the treasury keys stay with me — the kingdom runs on paperwork, and paperwork, unlike heroes, never takes a day off. Now, if we could do the monologue tomorrow? I have a nap scheduled, and a blanket, warm.";

// Write the monologue exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
