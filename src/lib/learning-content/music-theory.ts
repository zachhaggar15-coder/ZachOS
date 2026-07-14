import { buildAuthoredLessons, type AuthoredLesson } from "./types";

// Fifteen hand-written Music Theory for Guitar lessons: researched,
// concept-specific prose applied to the guitar fretboard, each closing on an
// everyday/playing example, plus genuine recall quizzes.
const musicTheory: AuthoredLesson[] = [
  {
    concept: "Fretboard Geography",
    level: "GCSE",
    summary: "understanding pitch locations across strings, frets and repeated octaves",
    estimatedMinutes: 7,
    deck: "The guitar fretboard looks like a baffling grid of identical dots, which is why so many players never truly learn it. But it is really a small, repeating map: master a handful of landmarks and octave shapes, and the whole neck opens up as navigable territory rather than memorised chaos.",
    keyTerms: [
      { label: "Standard tuning", value: "The default guitar tuning, low to high: E A D G B E." },
      { label: "Fret = semitone", value: "Moving up one fret raises the pitch by one half step (semitone)." },
      { label: "Octave shape", value: "A movable pattern that finds the same note an octave higher across the strings." },
      { label: "The 12th-fret repeat", value: "At the 12th fret, the open-string notes repeat an octave higher." },
    ],
    sections: [
      {
        heading: "A repeating map, not chaos",
        body: [
          `The fretboard intimidates beginners because it presents as a featureless grid: six strings, many frets, dots that all look alike. But underneath is a simple, highly repetitive system. Each fret raises the pitch by one semitone (a half step), so moving along a string is just stepping up the musical alphabet, note by note. The apparent complexity is really the same small set of relationships repeated across the neck.`,
          `In standard tuning the open strings, from the thick low string to the thin high one, are E, A, D, G, B, E. Notice the lowest and highest strings are both E, two octaves apart — already a piece of structure. Learning the fretboard is not memorising every dot in isolation but understanding how these strings relate and how patterns repeat, so you can work out any note from a few known landmarks.`,
        ],
      },
      {
        heading: "Landmarks to navigate by",
        body: [
          `Rather than memorising all six strings fret by fret, experienced players navigate by landmarks. The natural notes on the low E and A strings are especially worth knowing cold, because these two strings are the reference points for finding chord roots and bass notes across countless shapes. From a known note on the low E string, you can locate an enormous amount of the neck.`,
          `The frets themselves offer landmarks too: the position markers (usually at frets 3, 5, 7, 9 and the double dot at 12) are navigational aids. Knowing, for instance, that the 5th fret of the low E string is A, the 5th fret of the A string is D, and so on, gives you anchors. From anchors plus an understanding of the intervals between strings, you can deduce any note without having memorised it directly — the way you navigate a city from a few known streets rather than memorising every address.`,
        ],
      },
      {
        heading: "The power of the octave shape",
        body: [
          `The single most useful tool for learning the fretboard is the octave shape: a movable pattern that finds the same note name an octave higher (or lower). The most common one: from a note on the low E string, the same note an octave up sits two frets higher and two strings across, on the D string. The same two-fret, two-string relationship works from the A string to the G string. These shapes let you take any note you know and instantly find its twin elsewhere on the neck.`,
          `This transforms fretboard learning. Instead of memorising 72 separate positions, you learn a modest number of notes and then use octave shapes to spread that knowledge across the whole neck. Know where the C is on the low E string, apply the octave shape, and you have found another C without memorising it. Octave shapes turn a few known notes into a web that covers the entire fretboard, which is why they are one of the first things a serious student drills.`,
        ],
      },
      {
        heading: "The neck repeats at 12",
        body: [
          `A crucial structural fact: the fretboard repeats itself at the 12th fret. Because there are twelve semitones in an octave, the note at the 12th fret of any string is the same as the open string, one octave higher. The double dot marking the 12th fret signals this. So everything you learn in the first twelve frets simply repeats, an octave up, from the 12th fret onward. You are really only learning one octave's worth of layout.`,
          `This halves the task and reveals the neck's logic. The pattern from open string to the 11th fret recurs from the 12th to the 23rd. Combined with octave shapes and a few known landmarks, the 12-fret repeat means the fretboard is far smaller and more orderly than it first appears. What looks like an endless grid is one repeating octave of the musical alphabet, laid out in a consistent, learnable pattern — a map, not a maze.`,
        ],
      },
      {
        heading: "Finding your way around the neck",
        body: [
          `Every time you shift a chord or riff to a new position and it still works, you are using fretboard geography — the neck's repeating logic doing the work for you. When you slide a shape up twelve frets and it sounds the same an octave higher, you are feeling the 12th-fret repeat directly. Players who "know the fretboard" are not memory savants; they navigate from a few reference notes on the low strings, use octave shapes to jump around, and lean on the fact that everything repeats. Learning the neck as a small, repeating map rather than a grid of random dots is the difference between being lost on the guitar and being free to move anywhere on it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What are the open strings in standard tuning, from lowest to highest?",
        choices: [
          { id: "a", label: "E A D G B E" },
          { id: "b", label: "E A D G C F" },
          { id: "c", label: "D G C F A D" },
          { id: "d", label: "C G D A E B" },
        ],
        correctChoiceId: "a",
        explanation: "Standard tuning is E A D G B E from the thick low string to the thin high one — with the lowest and highest strings both E, two octaves apart.",
      },
      {
        dimension: "depth",
        prompt: "By how much does moving up one fret change the pitch?",
        choices: [
          { id: "a", label: "One whole step (two semitones)" },
          { id: "b", label: "One semitone (a half step)" },
          { id: "c", label: "One octave" },
          { id: "d", label: "It does not change the pitch" },
        ],
        correctChoiceId: "b",
        explanation: "Each fret raises the pitch by one semitone, so moving along a string steps up the musical alphabet note by note — the basis of the fretboard's repeating logic.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the octave shape so useful for learning the fretboard?",
        choices: [
          { id: "a", label: "It lets you turn a few known notes into a web covering the whole neck by finding their octave twins" },
          { id: "b", label: "It changes the guitar's tuning" },
          { id: "c", label: "It only works on the high E string" },
          { id: "d", label: "It memorises all 72 positions for you at once" },
        ],
        correctChoiceId: "a",
        explanation: "A movable octave shape (e.g. two frets up and two strings across from the low E to the D string) finds the same note elsewhere, spreading a few known notes across the entire neck.",
      },
      {
        dimension: "depth",
        prompt: "Why does the note at the 12th fret of a string match the open string?",
        choices: [
          { id: "a", label: "Because there are twelve semitones in an octave, so the 12th fret is one octave above the open string" },
          { id: "b", label: "Because the string is retuned there" },
          { id: "c", label: "Because the 12th fret is the middle of the neck by coincidence" },
          { id: "d", label: "Because the octave has ten notes" },
        ],
        correctChoiceId: "a",
        explanation: "An octave spans twelve semitones, so the 12th fret is exactly one octave above the open string — which is why the whole layout repeats an octave higher from the 12th fret onward.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do players say the fretboard is a 'map, not a maze'?",
        choices: [
          { id: "a", label: "Because it is a small repeating octave of patterns navigable from a few landmarks, not endless random dots" },
          { id: "b", label: "Because every dot must be memorised separately" },
          { id: "c", label: "Because the notes never repeat" },
          { id: "d", label: "Because the strings are all tuned the same" },
        ],
        correctChoiceId: "a",
        explanation: "The neck is one repeating octave of the musical alphabet, so with a few reference notes, octave shapes and the 12th-fret repeat, the whole fretboard becomes navigable rather than a maze to memorise.",
      },
    ],
    sources: [
      { label: "musictheory.net lessons", note: "Free interactive lessons on notes, the staff and fundamentals.", type: "Reference", url: "https://www.musictheory.net/lessons" },
      { label: "Guitar tunings (overview)", note: "Reference on standard tuning and the layout of the fretboard.", type: "Reference", url: "https://en.wikipedia.org/wiki/Guitar_tunings" },
    ],
  },
  {
    concept: "Intervals on Guitar",
    level: "GCSE",
    summary: "the distance between notes as movable fretboard relationships",
    estimatedMinutes: 7,
    deck: "An interval is simply the distance between two notes — and on the guitar, every interval has a shape. Because the fretboard is a consistent grid, the shape for a fifth or a third looks the same wherever you play it, which turns intervals into movable building blocks you can see as well as hear.",
    keyTerms: [
      { label: "Interval", value: "The distance in pitch between two notes, measured in semitones or scale steps." },
      { label: "Semitone and whole tone", value: "One fret (a half step) and two frets (a whole step) on the guitar." },
      { label: "Movable shapes", value: "Interval patterns that look identical anywhere on the fretboard." },
      { label: "Consonance and dissonance", value: "How stable or tense an interval sounds together." },
    ],
    sections: [
      {
        heading: "Distance between notes",
        body: [
          `An interval is the distance between two pitches — the fundamental unit from which scales, chords and melodies are built. Intervals are named by how many letter-names they span (a third, a fifth, an octave) and by quality (major, minor, perfect). At the smallest scale, the semitone (half step) is the distance of one fret, and the whole tone (whole step) is two frets. Every larger interval is just a specific number of semitones stacked up.`,
          `Hearing and recognising intervals is central to musicianship, because the character of any melody or chord comes from its intervals. A perfect fifth sounds strong and stable; a minor second sounds harsh and clashing; a major third sounds bright while a minor third sounds darker. Learning intervals trains both ear and understanding, letting you grasp why music sounds the way it does rather than treating notes as isolated dots.`,
        ],
      },
      {
        heading: "Intervals as shapes",
        body: [
          `The guitar has a special gift for intervals: because the fretboard is a regular grid, each interval corresponds to a physical shape, and that shape is movable — it looks the same wherever you play it. The distance from a note to the one an octave up is a fixed shape; so is the distance to the fifth above, or the third. Once you learn the shape for an interval, you can produce that interval anywhere on the neck by moving the same pattern.`,
          `This is a huge advantage for guitarists over, say, pianists, for whom the same interval can require different finger patterns in different keys. On guitar, a fifth is a fifth-shape everywhere (with one adjustment explained below). This means you can think and play in terms of interval shapes, seeing the relationships on the fretboard directly. Chords, scales and riffs all become combinations of these movable interval shapes rather than arbitrary finger positions.`,
        ],
      },
      {
        heading: "The one wrinkle: the G–B strings",
        body: [
          `There is a single quirk that every guitarist must absorb. In standard tuning, the interval between most adjacent strings is a perfect fourth — but the interval between the G string and the B string is a major third instead. This break in the pattern means that interval and chord shapes have to shift when they cross the G–B string boundary, usually by one fret.`,
          `This is why a shape that works cleanly on the lower strings needs a small adjustment when it involves the B or high E string. It is not a flaw to be resented but a feature to be learned; once you internalise the "shift across the G–B strings" rule, the movable-shape logic works everywhere. Understanding this wrinkle explains a great deal about why guitar chord shapes look the way they do, and why they seem to "jump" at that particular point on the neck.`,
        ],
      },
      {
        heading: "Consonance, dissonance and character",
        body: [
          `Intervals differ not just in size but in feel. Some sound stable and restful together — the octave, the perfect fifth, the perfect fourth, the major and minor thirds and sixths are broadly consonant. Others sound tense and unstable — the minor second, the tritone (an augmented fourth or diminished fifth), the major seventh — and are broadly dissonant, creating a pull toward resolution. This contrast of tension and rest is the engine of harmony.`,
          `The tritone deserves special mention: spanning three whole tones, it was historically nicknamed the "devil in music" for its unsettling sound, and it sits at the heart of the dominant chords that create harmonic tension. Learning to hear the difference between a sweet consonance and a biting dissonance is what lets you understand and control the emotional effect of the notes you choose. Intervals are where the raw feeling of music begins.`,
        ],
      },
      {
        heading: "Why your riffs move so easily",
        body: [
          `Every time you slide a power chord or a lick up the neck and it still works, you are exploiting interval shapes — the power chord is just a root and a fifth, a fixed movable shape. When a two-note figure sounds right anywhere you put it, that is the consistency of intervals on the fretboard. And when you try to move a shape onto the B string and it suddenly needs a nudge, you have met the G–B wrinkle firsthand. Thinking in intervals — seeing the fifth, the octave, the third as shapes you can move — is what lets guitarists transpose riffs instantly and improvise across the neck, treating the fretboard as a field of relationships rather than a grid of unrelated dots.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is an interval?",
        choices: [
          { id: "a", label: "The distance in pitch between two notes" },
          { id: "b", label: "The name of a guitar string" },
          { id: "c", label: "A type of chord with four notes" },
          { id: "d", label: "The speed of a song" },
        ],
        correctChoiceId: "a",
        explanation: "An interval is the distance between two pitches — measured in semitones (one fret) and scale steps — and it is the fundamental unit from which scales, chords and melodies are built.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are intervals especially convenient on the guitar?",
        choices: [
          { id: "a", label: "Because each interval has a movable shape that looks the same anywhere on the fretboard" },
          { id: "b", label: "Because the guitar has no intervals" },
          { id: "c", label: "Because every string is tuned identically" },
          { id: "d", label: "Because intervals change size in every key" },
        ],
        correctChoiceId: "a",
        explanation: "The fretboard's regular grid means an interval corresponds to a physical shape you can move anywhere, so a fifth is a fifth-shape everywhere — an advantage guitarists have over pianists.",
      },
      {
        dimension: "depth",
        prompt: "What is the tuning quirk between the G string and the B string?",
        choices: [
          { id: "a", label: "They are a major third apart, while most adjacent strings are a perfect fourth apart" },
          { id: "b", label: "They are tuned an octave apart" },
          { id: "c", label: "They are the same note" },
          { id: "d", label: "They are a perfect fifth apart" },
        ],
        correctChoiceId: "a",
        explanation: "Most adjacent strings are a perfect fourth apart, but the G–B interval is a major third, which is why shapes must shift by a fret when they cross that string boundary.",
      },
      {
        dimension: "depth",
        prompt: "Which of these intervals is broadly dissonant, creating tension?",
        choices: [
          { id: "a", label: "The perfect fifth" },
          { id: "b", label: "The octave" },
          { id: "c", label: "The tritone" },
          { id: "d", label: "The major third" },
        ],
        correctChoiceId: "c",
        explanation: "The tritone (three whole tones) sounds unstable and tense — historically the 'devil in music' — and sits at the heart of dominant chords, unlike the consonant fifth, octave and third.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a guitarist slide a power chord up the neck and have it still work?",
        choices: [
          { id: "a", label: "Because a power chord is a fixed root-and-fifth interval shape that stays the same wherever it moves" },
          { id: "b", label: "Because power chords have no intervals" },
          { id: "c", label: "Because the tuning changes as you move up" },
          { id: "d", label: "Because every fret is a different interval" },
        ],
        correctChoiceId: "a",
        explanation: "A power chord is just a root and a fifth — a movable interval shape — so it produces the same interval anywhere on the neck, which is why riffs transpose so easily on guitar.",
      },
    ],
    sources: [
      { label: "musictheory.net: intervals", note: "Free lessons on interval size, quality and identification.", type: "Reference", url: "https://www.musictheory.net/lessons/31" },
      { label: "Interval (music) (overview)", note: "Reference on intervals, consonance and dissonance.", type: "Reference", url: "https://en.wikipedia.org/wiki/Interval_(music)" },
    ],
  },
  {
    concept: "Major Scale Construction",
    level: "GCSE",
    summary: "the whole-step and half-step pattern that organises major-key melody and harmony",
    estimatedMinutes: 7,
    deck: "Almost all Western music is measured against one ruler: the major scale. It is not a random set of seven notes but a specific pattern of whole and half steps — the familiar do-re-mi — and once you know that pattern, you can build the major scale in any key, anywhere on the fretboard.",
    keyTerms: [
      { label: "The major scale pattern", value: "Whole–Whole–Half–Whole–Whole–Whole–Half (W W H W W W H)." },
      { label: "Scale degree", value: "The numbered position of a note in the scale (1 through 7)." },
      { label: "Tonic", value: "The first degree, the 'home' note that gives the scale its key." },
      { label: "Movable pattern", value: "The scale shape can be shifted to any root to change key." },
    ],
    sections: [
      {
        heading: "A pattern, not a random set",
        body: [
          `The major scale is the foundation of Western music theory — the reference against which nearly everything else is measured. Crucially, it is not an arbitrary collection of seven notes but a specific pattern of intervals: whole step, whole step, half step, whole step, whole step, whole step, half step (W W H W W W H). Start on any note and follow that exact sequence of steps, and you produce a major scale in that key. The pattern is what makes it "major".`,
          `On guitar, where a whole step is two frets and a half step is one, you can build a major scale on a single string just by applying the W-W-H-W-W-W-H spacing. Starting on C and following the pattern gives C D E F G A B — the C major scale, the white notes of a piano, and the reason there are no sharps or flats in the key of C. This step-pattern is the DNA of the major scale, generating the same familiar sound from any starting note.`,
        ],
      },
      {
        heading: "The sound of do-re-mi",
        body: [
          `The major scale is the "do-re-mi-fa-sol-la-ti-do" you have heard your whole life, and that singing sequence is the scale's seven notes plus the return to the octave. Each note has a characteristic feel relative to the home note. The pattern produces the bright, resolved, "happy" quality we associate with major keys, which comes directly from the specific arrangement of whole and half steps — in particular the major third between the first and third degrees.`,
          `The half steps do important work. They fall between the 3rd and 4th degrees and between the 7th and 8th (octave), and the small step from the 7th up to the tonic creates a strong pull toward "home" — the 7th degree is called the "leading tone" for exactly this reason. That gravitational pull toward the tonic is a big part of why major-key melodies feel like they resolve so satisfyingly when they land on the home note.`,
        ],
      },
      {
        heading: "Scale degrees as a numbering system",
        body: [
          `Because the major scale is the reference for everything, its notes are numbered 1 through 7 as scale degrees, and this numbering becomes a universal language. The 1st degree is the tonic (home); the 5th is the dominant (a point of tension); the 4th is the subdominant, and so on. Referring to notes and chords by their scale-degree numbers, rather than absolute note names, lets musicians describe music in a way that works in any key.`,
          `This is why so much theory is written in numbers. A chord progression described as "1–4–5" (often written with Roman numerals I–IV–V) means the chords built on the first, fourth and fifth degrees, and that description holds in every key. The scale-degree system, anchored in major-scale construction, is the framework that lets you understand and transpose music, seeing the function of each note and chord relative to the tonic.`,
        ],
      },
      {
        heading: "One pattern, twelve keys",
        body: [
          `The great practical payoff on guitar is that the major scale is a movable pattern. Because a fixed sequence of frets produces the scale, you can slide the same fingering to start on any root and get the major scale in that key. Learn the shape once, move it up two frets, and a C major scale becomes a D major scale — the same pattern, a new key. This is the guitarist's superpower: patterns transpose freely, unlike on instruments where every key looks different.`,
          `This is also why understanding the interval pattern matters more than memorising note names in isolation. If you know the scale as a shape and a step-pattern, you can play in any key without relearning, and you can see how the scale relates to chords and other scales built from it. The major scale, learned as a movable pattern of whole and half steps, is the master key that unlocks melody, harmony and improvisation across the whole fretboard.`,
        ],
      },
      {
        heading: "The scale you already know by ear",
        body: [
          `You have known the major scale since childhood — it is do-re-mi, the tune of countless melodies, the run of notes you would hum to sound "musical". When you pick out a simple melody by ear and it sounds right, you are usually moving within a major scale without naming it. On guitar, the moment you learn one movable major-scale shape and slide it to a new fret to change key, you feel the power of the pattern directly. Understanding that this universal, cheerful sound comes from one specific arrangement of whole and half steps — W-W-H-W-W-W-H — turns a familiar tune into a tool you can build melodies and chords from in any key.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the interval pattern of the major scale?",
        choices: [
          { id: "a", label: "Whole–Whole–Half–Whole–Whole–Whole–Half" },
          { id: "b", label: "Half–Half–Whole–Half–Half–Whole–Whole" },
          { id: "c", label: "All whole steps" },
          { id: "d", label: "All half steps" },
        ],
        correctChoiceId: "a",
        explanation: "The major scale follows W-W-H-W-W-W-H; starting on any note and following this exact sequence of steps produces a major scale in that key.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is there no sharp or flat in the key of C major?",
        choices: [
          { id: "a", label: "Because applying the W-W-H-W-W-W-H pattern from C gives C D E F G A B — the natural notes" },
          { id: "b", label: "Because C major uses only black notes" },
          { id: "c", label: "Because C is not a real key" },
          { id: "d", label: "Because C major has only five notes" },
        ],
        correctChoiceId: "a",
        explanation: "Starting on C and following the major-scale step pattern lands exactly on C D E F G A B, the white notes of the piano, so the key of C has no sharps or flats.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'tonic'?",
        choices: [
          { id: "a", label: "The first scale degree — the home note that gives the scale its key" },
          { id: "b", label: "The loudest note in a chord" },
          { id: "c", label: "The seventh degree of the scale" },
          { id: "d", label: "The fastest note in a melody" },
        ],
        correctChoiceId: "a",
        explanation: "The tonic is the 1st degree, the 'home' note the scale is named for and that melodies tend to resolve to, giving the key its identity.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the 7th degree called the 'leading tone'?",
        choices: [
          { id: "a", label: "Because the half step from the 7th up to the tonic creates a strong pull toward home" },
          { id: "b", label: "Because it is always the loudest note" },
          { id: "c", label: "Because it leads the band" },
          { id: "d", label: "Because it is a whole step below the tonic" },
        ],
        correctChoiceId: "a",
        explanation: "A half step separates the 7th degree from the octave tonic, and that small gap creates a gravitational pull toward 'home', which is why major-key melodies resolve so satisfyingly onto the tonic.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a guitarist play a major scale in any key with the same fingering?",
        choices: [
          { id: "a", label: "Because the scale is a movable pattern — sliding the fixed fret shape to a new root changes the key" },
          { id: "b", label: "Because every key uses different frets entirely" },
          { id: "c", label: "Because the guitar retunes for each key" },
          { id: "d", label: "Because major scales have no pattern" },
        ],
        correctChoiceId: "a",
        explanation: "A fixed sequence of frets produces the scale, so sliding the same shape to start on any root gives that key's major scale — the guitarist's advantage that patterns transpose freely.",
      },
    ],
    sources: [
      { label: "musictheory.net: the major scale", note: "Free lessons on scale construction and key signatures.", type: "Reference", url: "https://www.musictheory.net/lessons/21" },
      { label: "Major scale (overview)", note: "Reference on the major scale pattern and scale degrees.", type: "Reference", url: "https://en.wikipedia.org/wiki/Major_scale" },
    ],
  },
  {
    concept: "Minor Keys",
    level: "A-level",
    summary: "minor-key pitch collections and their natural, harmonic and melodic variants",
    estimatedMinutes: 8,
    deck: "If the major scale is bright and resolved, the minor scale is its shadowed sibling — the sound of sadness, tension and drama. But 'minor' is not one scale but a small family, and understanding its three forms explains why minor-key music can be mournful, exotic or fiercely dramatic at will.",
    keyTerms: [
      { label: "Natural minor", value: "The basic minor scale, with a flattened 3rd, 6th and 7th relative to major." },
      { label: "Relative minor", value: "The minor key sharing a major key's notes, built on its 6th degree." },
      { label: "Harmonic minor", value: "Natural minor with a raised 7th, restoring a strong pull to the tonic." },
      { label: "Melodic minor", value: "A minor form that raises the 6th and 7th when ascending." },
    ],
    sections: [
      {
        heading: "The darker scale",
        body: [
          `The minor scale is the primary alternative to the major scale, and it carries a very different emotional charge: where major sounds bright and resolved, minor sounds darker, sadder, more tense or dramatic. The core difference is the third degree. A minor scale has a minor third between the tonic and the third degree, rather than the major third of the major scale, and that flattened third is the single biggest source of the "minor" feeling. The natural minor scale also flattens the 6th and 7th degrees compared to major.`,
          `You can hear the contrast instantly: play a major chord and a minor chord back to back and the shift from bright to melancholy is unmistakable, and it comes down to that lowered third. Because so much emotional music lives in minor keys, understanding minor scales is essential to playing anything beyond the cheerful. The minor scale gives you access to the whole shadowed half of music's emotional range.`,
        ],
      },
      {
        heading: "Relatives that share notes",
        body: [
          `A beautiful piece of structure links major and minor: every major scale has a "relative minor" that uses exactly the same notes but treats a different note as home. The relative minor is built on the 6th degree of the major scale. C major and A minor, for instance, contain identical notes (no sharps or flats), but C major centres on C while A minor centres on A, giving the same seven notes two completely different characters depending on which feels like home.`,
          `This relationship is enormously useful on guitar. Because the relative major and minor share notes, they share scale shapes: the same fingering that plays C major, started from a different point, plays A minor. So learning one scale pattern gives you two keys. It also explains why songs slip so naturally between a major key and its relative minor — they are drawing on the same pool of notes, just shifting which one feels like the centre of gravity.`,
        ],
      },
      {
        heading: "Fixing minor's weak resolution",
        body: [
          `The natural minor scale has one harmonic drawback. Because its 7th degree is a whole step below the tonic (a "subtonic" rather than a leading tone), it lacks the strong half-step pull toward home that gives major keys their satisfying resolution. Composers wanted that pull in minor keys too, so they raised the 7th degree, creating the harmonic minor scale. This restores a leading tone a half step below the tonic and, with it, a powerful sense of resolution and a stronger dominant chord.`,
          `Raising the 7th has a side effect: it opens an unusually large gap — an augmented second — between the flattened 6th and the raised 7th. This wide, exotic-sounding interval gives the harmonic minor scale its distinctive dramatic, sometimes Middle-Eastern or Spanish flavour, heard in flamenco, metal and classical music alike. So harmonic minor solves a harmonic problem (weak resolution) while creating a striking melodic colour, which is why it is so recognisable and so widely used for dramatic effect.`,
        ],
      },
      {
        heading: "Smoothing the melody",
        body: [
          `The augmented-second leap of harmonic minor can sound awkward in a flowing melody. To smooth it, composers created the melodic minor scale, which raises both the 6th and 7th degrees when ascending, eliminating the awkward gap while keeping the leading tone. Traditionally, when descending, melodic minor reverts to the natural minor form, since the strong pull to the tonic is less needed on the way down — though in jazz, a version that stays raised in both directions is common.`,
          `So the "minor scale" is really a flexible family: natural minor for the basic minor sound and mournful colour, harmonic minor to get a strong resolution and dramatic flavour, and melodic minor to smooth the melodic line. Composers and improvisers move between these forms depending on what a passage needs. Understanding the three explains why minor-key music is so varied — the same key can sound plaintive, exotic or smoothly lyrical depending on which form of the scale is in play at that moment.`,
        ],
      },
      {
        heading: "Why the sad songs sound sad",
        body: [
          `You recognise minor keys emotionally long before you can name them: the wistful ballad, the dark film score, the dramatic riff all lean on the minor scale's flattened third. When a happy song and a sad song use the "same" notes but feel utterly different, you may be hearing the relative-major/minor relationship — the pool of notes shared, the home note shifted. And that unmistakable dramatic, "Spanish" or "metal" flavour in certain solos is often harmonic minor's exotic augmented second. Knowing that minor is a family of scales, each tuned for a different shade of feeling, lets you both understand why music moves you and choose the exact colour of darkness you want when you play.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the single biggest source of the 'minor' feeling?",
        choices: [
          { id: "a", label: "The minor third between the tonic and the third degree" },
          { id: "b", label: "A raised fourth degree" },
          { id: "c", label: "The absence of a tonic" },
          { id: "d", label: "Playing louder than in major" },
        ],
        correctChoiceId: "a",
        explanation: "A minor scale has a minor (flattened) third rather than a major third, and that lowered third is the main source of the darker, sadder minor quality.",
      },
      {
        dimension: "depth",
        prompt: "How is the relative minor of a major key found?",
        choices: [
          { id: "a", label: "It is built on the 6th degree of the major scale and uses the same notes" },
          { id: "b", label: "It is built on the 2nd degree with different notes" },
          { id: "c", label: "It uses completely different notes from the major key" },
          { id: "d", label: "It is the major scale played backwards" },
        ],
        correctChoiceId: "a",
        explanation: "The relative minor sits on the major scale's 6th degree and shares its exact notes — so C major and A minor contain the same notes but centre on different home notes.",
      },
      {
        dimension: "reasoning",
        prompt: "Why did composers create the harmonic minor scale by raising the 7th degree?",
        choices: [
          { id: "a", label: "To restore a leading tone a half step below the tonic, giving a strong pull to home and a stronger dominant chord" },
          { id: "b", label: "To make the scale easier to play" },
          { id: "c", label: "To remove the tonic entirely" },
          { id: "d", label: "To flatten the third further" },
        ],
        correctChoiceId: "a",
        explanation: "Natural minor's 7th is a whole step below the tonic, lacking a strong pull home; raising it creates a leading tone and restores the satisfying resolution and stronger dominant of major keys.",
      },
      {
        dimension: "depth",
        prompt: "What gives harmonic minor its distinctive dramatic, exotic flavour?",
        choices: [
          { id: "a", label: "The augmented-second gap between the flattened 6th and the raised 7th" },
          { id: "b", label: "A missing third degree" },
          { id: "c", label: "Using only five notes" },
          { id: "d", label: "A doubled tonic" },
        ],
        correctChoiceId: "a",
        explanation: "Raising the 7th while keeping the flattened 6th opens an unusually wide augmented second, giving harmonic minor its striking, sometimes Middle-Eastern or Spanish colour.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does melodic minor raise the 6th and 7th degrees when ascending?",
        choices: [
          { id: "a", label: "To smooth the awkward augmented-second leap of harmonic minor while keeping the leading tone" },
          { id: "b", label: "To make the scale sound more like major forever" },
          { id: "c", label: "To remove the leading tone" },
          { id: "d", label: "To flatten every note" },
        ],
        correctChoiceId: "a",
        explanation: "Melodic minor raises both the 6th and 7th ascending to eliminate harmonic minor's awkward wide gap while retaining the strong pull to the tonic, smoothing the melodic line.",
      },
    ],
    sources: [
      { label: "musictheory.net: minor scales", note: "Free lessons on natural, harmonic and melodic minor.", type: "Reference", url: "https://www.musictheory.net/lessons/22" },
      { label: "Minor scale (overview)", note: "Reference on the three forms of minor and relative keys.", type: "Reference", url: "https://en.wikipedia.org/wiki/Minor_scale" },
    ],
  },
  {
    concept: "Triads Across String Sets",
    level: "A-level",
    summary: "three-note chord structures mapped through adjacent guitar strings",
    estimatedMinutes: 8,
    deck: "A chord is not a mysterious grip to be memorised but a stack of intervals — and the simplest chord, the triad, is just three notes: a root, a third and a fifth. Learning to see triads as movable shapes across small sets of strings turns the fretboard from a chord-chart lookup into a place you can build harmony anywhere.",
    keyTerms: [
      { label: "Triad", value: "A three-note chord built from a root, a third and a fifth." },
      { label: "Stacked thirds", value: "Triads are built by stacking two thirds on top of each other." },
      { label: "Chord quality", value: "Major, minor, diminished or augmented, set by which thirds are stacked." },
      { label: "String set", value: "A group of adjacent strings on which a triad shape is played." },
    ],
    sections: [
      {
        heading: "Chords are stacked thirds",
        body: [
          `The most basic chord is the triad: three notes built from a root, a third and a fifth. Take the first, third and fifth degrees of a scale — in C major, the notes C, E and G — and you have a C major triad. Structurally, a triad is two thirds stacked: from the root up a third to the middle note, then up another third to the top note. This "stacked thirds" construction is the foundation of nearly all Western harmony; even elaborate chords are usually triads with extra thirds piled on.`,
          `Seeing chords this way is liberating. Instead of memorising dozens of unrelated grips, you understand that every chord is built from these simple components. The full "cowboy chords" beginners learn are really triads with notes doubled across six strings. Stripping a chord down to its essential three notes — root, third, fifth — reveals the harmony underneath and lets you build and understand chords rather than just copying finger positions from a chart.`,
        ],
      },
      {
        heading: "Quality comes from the thirds",
        body: [
          `The character of a triad — its "quality" — depends entirely on which kinds of third are stacked. A major triad stacks a major third then a minor third, producing the bright major sound (root, major 3rd, perfect 5th). A minor triad reverses them, stacking a minor third then a major third, giving the darker minor sound (root, minor 3rd, perfect 5th). The middle note, the third, is what flips a chord between major and minor — the same distinction that colours whole scales.`,
          `Two more qualities complete the set. A diminished triad stacks two minor thirds, producing a tense, unstable sound (root, minor 3rd, diminished 5th). An augmented triad stacks two major thirds, giving a strange, suspended sound (root, major 3rd, augmented 5th). These four qualities — major, minor, diminished, augmented — are the basic triad types, and knowing that the arrangement of thirds determines each one lets you construct or identify any triad from its intervals.`,
        ],
      },
      {
        heading: "Triads on string sets",
        body: [
          `On guitar, triads become powerful when you learn them on small "string sets" — groups of three adjacent strings, such as strings 1-2-3, 2-3-4, 3-4-5 or 4-5-6. On each string set, the three notes of a triad form a compact, movable shape. Because there are three notes and three inversions (which note is on the bottom), each triad has a handful of shapes per string set, and these shapes are movable up and down the neck to any root.`,
          `This approach transforms your command of the fretboard. Instead of only knowing big six-string chords, you can play a given chord in many places and registers using these compact triad shapes, choosing the one that fits the musical moment. Triad shapes on the top strings are especially useful for adding chordal colour and melody above a bassline, and for smooth chord changes. Learning triads across string sets is one of the biggest steps from strumming memorised shapes to genuinely understanding harmony on the neck.`,
        ],
      },
      {
        heading: "Small shapes, big flexibility",
        body: [
          `The practical advantages of thinking in triads are large. Compact three-note shapes are easier to move and voice-lead smoothly than full barre chords, letting you change chords with minimal hand movement and connect them elegantly. They free up register: you can play harmony high on the neck to sit above a vocal, or low to anchor a groove. And because you understand the notes, you can alter a triad deliberately — flatten the third to go minor, raise the fifth to go augmented — rather than reaching for a memorised alternative shape.`,
          `Triads also underpin more advanced concepts. Seventh chords, extended chords and "upper-structure" voicings are all built by adding to or combining triads, so a solid grasp of triads across the neck is the platform for everything harmonically richer. Many sophisticated guitar textures — arpeggios, double-stops, chord melody — come from moving small triad shapes around. Master the humble three-note chord in all its positions, and you have the building block from which the guitar's entire harmonic vocabulary is assembled.`,
        ],
      },
      {
        heading: "Seeing chords instead of grabbing them",
        body: [
          `The moment you realise your familiar open chords are just triads with doubled notes, the fretboard changes. When you play a small three-string shape high up the neck to add colour behind a melody, or shift a triad up to a new position instead of jumping to a whole new barre chord, you are using triads across string sets. Guitarists who "just know where the chords are" are usually seeing root-third-fifth shapes everywhere rather than recalling a chart. Learning to build chords from stacked thirds — and to move those compact shapes around the neck — is what turns chord playing from memorised grips into harmony you actually understand and can bend to your will.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What three notes make up a triad?",
        choices: [
          { id: "a", label: "A root, a third and a fifth" },
          { id: "b", label: "A root, a fourth and a sixth" },
          { id: "c", label: "Three copies of the same note" },
          { id: "d", label: "A root, a seventh and a ninth" },
        ],
        correctChoiceId: "a",
        explanation: "A triad is a three-note chord built from a root, a third and a fifth — structurally two thirds stacked on top of each other, the foundation of Western harmony.",
      },
      {
        dimension: "reasoning",
        prompt: "What determines whether a triad is major or minor?",
        choices: [
          { id: "a", label: "Whether the lower stacked third is major (major triad) or minor (minor triad)" },
          { id: "b", label: "How loudly it is played" },
          { id: "c", label: "Which string set it is on" },
          { id: "d", label: "The fifth degree only" },
        ],
        correctChoiceId: "a",
        explanation: "A major triad stacks a major third then a minor third; a minor triad reverses them. The third is what flips a chord between bright major and darker minor.",
      },
      {
        dimension: "depth",
        prompt: "How is a diminished triad constructed?",
        choices: [
          { id: "a", label: "By stacking two minor thirds, giving a tense, unstable sound" },
          { id: "b", label: "By stacking two major thirds" },
          { id: "c", label: "By using only two notes" },
          { id: "d", label: "By stacking a major third then a minor third" },
        ],
        correctChoiceId: "a",
        explanation: "A diminished triad stacks two minor thirds (root, minor 3rd, diminished 5th), producing its characteristic tense, unstable sound; an augmented triad stacks two major thirds.",
      },
      {
        dimension: "reasoning",
        prompt: "Why are compact triad shapes on string sets so useful on guitar?",
        choices: [
          { id: "a", label: "They are movable, easy to voice-lead smoothly, and let you play harmony in many registers and positions" },
          { id: "b", label: "They can only be played as full six-string chords" },
          { id: "c", label: "They cannot be moved on the neck" },
          { id: "d", label: "They remove the need to know any notes" },
        ],
        correctChoiceId: "a",
        explanation: "Three-note shapes move easily, connect smoothly with minimal hand movement, and can be placed high or low on the neck — letting you choose the voicing that fits the moment instead of only big barre chords.",
      },
      {
        dimension: "depth",
        prompt: "Why is a solid grasp of triads called the platform for richer harmony?",
        choices: [
          { id: "a", label: "Because seventh chords, extended chords and upper-structure voicings are built by adding to or combining triads" },
          { id: "b", label: "Because triads make all other chords unnecessary" },
          { id: "c", label: "Because richer chords have no relation to triads" },
          { id: "d", label: "Because triads can only be played once" },
        ],
        correctChoiceId: "a",
        explanation: "Seventh, extended and upper-structure chords all build on or combine triads, so command of triads across the neck is the foundation from which the guitar's whole harmonic vocabulary is assembled.",
      },
    ],
    sources: [
      { label: "musictheory.net: chords and triads", note: "Free lessons on triad construction and chord quality.", type: "Reference", url: "https://www.musictheory.net/lessons/40" },
      { label: "Triad (music) (overview)", note: "Reference on triads, stacked thirds and chord qualities.", type: "Reference", url: "https://en.wikipedia.org/wiki/Triad_(music)" },
    ],
  },
  {
    concept: "Seventh Chords",
    level: "A-level",
    summary: "four-note sonorities that add harmonic colour and function",
    estimatedMinutes: 8,
    deck: "Add one more note to a triad and the whole emotional palette expands. Seventh chords — a triad plus a note a seventh above the root — are where harmony gets rich, jazzy and full of pull, and where a few added tones turn plain chords into the sophisticated sounds of soul, jazz and film.",
    keyTerms: [
      { label: "Seventh chord", value: "A four-note chord: a triad plus a note a seventh above the root." },
      { label: "Major seventh", value: "A lush, warm chord: major triad plus a major seventh." },
      { label: "Dominant seventh", value: "A tense chord (major triad plus minor seventh) that pulls toward resolution." },
      { label: "Shell voicing", value: "A stripped-down chord using just the essential root, third and seventh." },
    ],
    sections: [
      {
        heading: "One more third",
        body: [
          `A seventh chord is a triad with one more note stacked on top — a note a seventh above the root, which is really just another third piled onto the triad's stack of thirds. This fourth note enriches the chord, adding colour, tension and a distinctive character that a plain triad lacks. Where triads are the primary colours of harmony, seventh chords are the richer, blended shades, and they are the harmonic backbone of jazz, soul, R&B and much film music.`,
          `The type of seventh you add, combined with the underlying triad, produces different seventh-chord qualities, each with its own flavour. The main ones every guitarist should know are the major seventh, the minor seventh, and the dominant seventh, with the half-diminished and diminished sevenths appearing in more advanced contexts. Learning these transforms the sound of your playing from basic to sophisticated, because so much expressive music depends on the added seventh.`,
        ],
      },
      {
        heading: "The three essential sevenths",
        body: [
          `The major seventh chord is a major triad plus a major seventh (the note a half step below the octave). It has a lush, warm, slightly dreamy quality — the sound of a mellow jazz ballad or a soulful chord. The minor seventh chord is a minor triad plus a minor seventh; it sounds smooth, mellow and slightly melancholy, a staple of soul, funk and jazz. Both are relatively restful, coloured but stable.`,
          `The dominant seventh is the pivotal one. It is a major triad plus a minor seventh, and unlike the other two it is tense and unstable, actively wanting to resolve. This tension comes from a tritone hidden inside it, between the chord's third and seventh, which strains toward release. The dominant seventh is the great engine of harmonic motion in Western music: it is the chord built on the 5th degree that pulls powerfully back to the tonic, and it is also the defining sound of the blues, where dominant sevenths are used throughout.`,
        ],
      },
      {
        heading: "Shell voicings: less is more",
        body: [
          `On guitar, playing full four-note seventh chords across six strings can be awkward and muddy. Skilled players often use "shell voicings" instead: stripped-down chords that keep only the most essential notes, usually the root, the third and the seventh, and drop the fifth. This works because the third and the seventh are the notes that define a chord's quality — the third sets major or minor, the seventh sets the seventh type — while the fifth adds little and can be omitted.`,
          `Shell voicings are compact, easy to move, and sound clear and professional, which is why they are a cornerstone of jazz guitar comping. They also make smooth voice leading easy, because you are moving only two or three notes between chords. Understanding that a seventh chord's identity lives in its third and seventh — its "guide tones" — is a key insight: you can imply a rich chord with just those two notes, and much sophisticated guitar playing is built on moving these essential tones rather than grabbing full chords.`,
        ],
      },
      {
        heading: "Function follows the seventh",
        body: [
          `Seventh chords do not just add colour; they clarify harmonic function. Adding sevenths to the basic chords of a key sharpens each chord's role: the chord on the 5th degree becomes a dominant seventh with its strong pull home, the tonic and subdominant become major sevenths, and the chords on other degrees become minor sevenths, and so on. The added sevenths make the push and pull of a progression more defined and expressive.`,
          `This is why moving from triads to seventh chords is such a leap in sophistication. The classic jazz progression built on the 2nd, 5th and 1st degrees (the "ii–V–I") relies entirely on seventh chords: a minor seventh, a dominant seventh, and a major seventh, each colour and function heightened by its added note, creating a satisfying journey of tension and resolution. Learning seventh chords is learning the vocabulary of harmonically rich music, where the fourth note in each chord carries much of the expressive and functional weight.`,
        ],
      },
      {
        heading: "The chords that sound 'jazzy'",
        body: [
          `You have heard the difference seventh chords make even if you cannot name it: the warm, floating quality of a major seventh in a soul ballad, the smooth groove of minor sevenths in funk, the bluesy grind of dominant sevenths in a blues shuffle. When a chord sounds richer and more "grown-up" than a plain strummed triad, an added seventh is usually why. On guitar, the moment you swap a basic chord for its seventh version — or comp using just the third and seventh as a shell voicing — your playing suddenly sounds more professional. Understanding that this richness comes from stacking one more third, and that the third and seventh carry the chord's identity, gives you deliberate control over that sophisticated sound.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a seventh chord?",
        choices: [
          { id: "a", label: "A triad plus a note a seventh above the root" },
          { id: "b", label: "A chord with seven notes" },
          { id: "c", label: "The seventh chord in a song" },
          { id: "d", label: "A triad played seven times" },
        ],
        correctChoiceId: "a",
        explanation: "A seventh chord is a four-note chord: a triad with one more third stacked on top, a note a seventh above the root, adding colour and character beyond a plain triad.",
      },
      {
        dimension: "depth",
        prompt: "Which seventh chord is tense and actively wants to resolve?",
        choices: [
          { id: "a", label: "The major seventh" },
          { id: "b", label: "The minor seventh" },
          { id: "c", label: "The dominant seventh" },
          { id: "d", label: "None of them ever resolve" },
        ],
        correctChoiceId: "c",
        explanation: "The dominant seventh (major triad plus minor seventh) is tense and unstable, straining toward resolution because of a tritone between its third and seventh — the great engine of harmonic motion.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a shell voicing drop the fifth but not the third or seventh?",
        choices: [
          { id: "a", label: "Because the third and seventh define the chord's quality, while the fifth adds little" },
          { id: "b", label: "Because the fifth is the most important note" },
          { id: "c", label: "Because the third and seventh are optional" },
          { id: "d", label: "Because dropping the fifth changes the root" },
        ],
        correctChoiceId: "a",
        explanation: "The third sets major or minor and the seventh sets the seventh type — these 'guide tones' define the chord's identity — so a shell voicing keeps root, third and seventh and omits the less essential fifth.",
      },
      {
        dimension: "reasoning",
        prompt: "Where does the dominant seventh's tension come from?",
        choices: [
          { id: "a", label: "A tritone between its third and seventh that strains toward release" },
          { id: "b", label: "Its major seventh" },
          { id: "c", label: "Having no third" },
          { id: "d", label: "Being played very quietly" },
        ],
        correctChoiceId: "a",
        explanation: "Hidden inside the dominant seventh is a tritone between the chord's third and seventh, and that unstable interval creates the pull toward resolution that drives so much harmonic motion.",
      },
      {
        dimension: "depth",
        prompt: "Why is the jazz ii–V–I progression built on seventh chords significant?",
        choices: [
          { id: "a", label: "It uses a minor seventh, a dominant seventh and a major seventh, each heightening colour and function for a satisfying tension-and-resolution journey" },
          { id: "b", label: "It only uses plain triads" },
          { id: "c", label: "It avoids all resolution" },
          { id: "d", label: "It is played in a single chord" },
        ],
        correctChoiceId: "a",
        explanation: "The ii–V–I relies on seventh chords — minor seventh, dominant seventh, major seventh — whose added notes sharpen each chord's role, creating the classic journey of tension and resolution at the heart of jazz.",
      },
    ],
    sources: [
      { label: "musictheory.net: seventh chords", note: "Free lessons on seventh chord types and construction.", type: "Reference", url: "https://www.musictheory.net/lessons/43" },
      { label: "Seventh chord (overview)", note: "Reference on seventh chord qualities and function.", type: "Reference", url: "https://en.wikipedia.org/wiki/Seventh_chord" },
    ],
  },
  {
    concept: "Inversions and Voicings",
    level: "University",
    summary: "reordering chord tones to control register, bass movement and texture",
    estimatedMinutes: 9,
    deck: "The same three or four notes can be arranged in countless ways, and each arrangement — each voicing — has its own sound, weight and smoothness. Mastering inversions and voicings is what separates a player who grabs chords from one who shapes them, controlling the bass line, the register and the flow of harmony.",
    keyTerms: [
      { label: "Voicing", value: "The specific arrangement — order, spacing and register — of a chord's notes." },
      { label: "Inversion", value: "A chord voiced with a note other than the root in the bass." },
      { label: "Root position", value: "A chord with its root as the lowest note." },
      { label: "Slash chord", value: "A chord notation specifying a particular bass note (e.g. C/E)." },
    ],
    sections: [
      {
        heading: "Same notes, different arrangement",
        body: [
          `A chord is defined by which notes it contains, but those notes can be arranged in many ways — different orders, octaves and spacings — and each arrangement is a distinct "voicing". A C major chord always contains C, E and G, but whether C is on the bottom or on top, whether the notes are bunched close together or spread wide, whether a note is doubled, all change how the chord sounds and feels. Voicing is the art of choosing how to arrange a chord's notes, and it has an enormous effect on the music.`,
          `This matters because two players using the "same" chords can sound completely different depending on their voicings. Thoughtful voicing can make a progression smooth and flowing or jagged and dramatic, can place the harmony in a bright high register or a dark low one, and can highlight a melody on top or a moving line in the bass. Moving beyond memorised chord shapes to consciously chosen voicings is a major step in musical sophistication.`,
        ],
      },
      {
        heading: "Inversions: changing the bass",
        body: [
          `The most fundamental voicing choice is which note sits in the bass, and this defines a chord's inversion. When the root is the lowest note, the chord is in "root position". When the third is lowest, it is in "first inversion"; when the fifth is lowest, "second inversion" (and for seventh chords, the seventh in the bass gives a "third inversion"). The notes are the same, but the chord's character and, crucially, its bass note change.`,
          `Inversions are written on guitar and in pop as "slash chords": C/E means a C chord with E in the bass (first inversion), C/G means a C chord with G in the bass. The reason inversions matter so much is the bass line. By choosing inversions, you control the movement of the lowest note, which is one of the most powerful forces in music. A well-chosen sequence of inversions can create a smooth, stepwise bass line under a static or slowly changing harmony, giving a progression a sense of graceful motion that root-position chords, jumping around in the bass, cannot.`,
        ],
      },
      {
        heading: "Voicings for smoothness and colour",
        body: [
          `Beyond the bass note, voicing controls how smoothly chords connect. When changing from one chord to the next, you can choose voicings that keep common notes in place and move the other notes as little as possible — the principle of good voice leading. Smooth voicings make a progression sound polished and connected; clumsy ones, where every note leaps, sound disjointed. Choosing inversions and voicings to minimise movement between chords is a hallmark of skilled playing and arranging.`,
          `Voicing also shapes texture and colour. "Close" voicings, with the notes packed tightly together, sound dense and blended; "open" or "spread" voicings, with the notes spaced widely apart, sound more spacious and resonant — a favourite for lush, ringing guitar chords. Which notes you place on top matters too, since the highest note is the most prominent and often carries a melody. Voicing is thus a rich creative tool: the same harmony can be made intimate or grand, smooth or angular, simply by how its notes are arranged.`,
        ],
      },
      {
        heading: "The guitarist's voicing challenge",
        body: [
          `The guitar makes voicing both rich and tricky. Because a note can often be played in several places on the neck, guitarists have many possible voicings for any chord, from compact three-string shapes to wide six-string spreads — a wealth of options unavailable on many instruments. This lets a thoughtful guitarist find exactly the register, bass note and texture a passage needs, and to voice-lead smoothly by choosing shapes close to each other on the neck.`,
          `But the guitar's tuning and limited span also constrain voicings: you cannot spread notes as freely as a pianist, and some arrangements are physically impossible or awkward. Part of guitar mastery is learning which voicings are available and practical in each area of the neck, and how to move between them fluidly. Players who study inversions and voicings — rather than only barre and open chords — gain the ability to comp behind a singer sensitively, arrange chord melodies, and give even simple progressions a professional, flowing sound. It is one of the deepest and most rewarding areas of guitar harmony.`,
        ],
      },
      {
        heading: "Why the same song can sound so different",
        body: [
          `You hear voicing at work whenever the same chords sound richer or smoother in one player's hands than another's. A cover that feels lusher than the original often just uses better voicings and inversions. When a bass line walks smoothly downward under an otherwise simple progression — a very common, satisfying sound in pop and folk — you are hearing inversions (slash chords) at work. On guitar, the moment you choose a chord shape because its top note carries the melody, or because it connects smoothly to the next chord, you are voicing consciously. Understanding that a chord is not one fixed grip but a set of notes you can arrange freely is what lets you move from playing chords to arranging them.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a chord 'voicing'?",
        choices: [
          { id: "a", label: "The specific arrangement — order, spacing and register — of a chord's notes" },
          { id: "b", label: "The lyrics sung over a chord" },
          { id: "c", label: "The volume of a chord" },
          { id: "d", label: "The number of times a chord is played" },
        ],
        correctChoiceId: "a",
        explanation: "A voicing is how a chord's notes are arranged — which is on the bottom or top, how spread out they are, whether any are doubled — and it strongly affects how the chord sounds and feels.",
      },
      {
        dimension: "depth",
        prompt: "What defines a chord's 'inversion'?",
        choices: [
          { id: "a", label: "Which note of the chord is in the bass (lowest)" },
          { id: "b", label: "How fast the chord is played" },
          { id: "c", label: "Whether the chord is major or minor" },
          { id: "d", label: "The number of strings used" },
        ],
        correctChoiceId: "a",
        explanation: "Inversion is set by the lowest note: root position has the root in the bass, first inversion the third, second inversion the fifth — the same notes but a different bass note and character.",
      },
      {
        dimension: "reasoning",
        prompt: "Why do inversions matter so much for a progression?",
        choices: [
          { id: "a", label: "They control the bass line, letting you create a smooth, stepwise bass instead of one jumping around" },
          { id: "b", label: "They change which notes the chord contains" },
          { id: "c", label: "They make chords louder" },
          { id: "d", label: "They have no audible effect" },
        ],
        correctChoiceId: "a",
        explanation: "By choosing which note is in the bass, inversions shape the movement of the lowest note; a good sequence creates a smooth, graceful bass line that root-position chords, leaping in the bass, cannot.",
      },
      {
        dimension: "depth",
        prompt: "What does the slash chord 'C/E' indicate?",
        choices: [
          { id: "a", label: "A C chord with E in the bass (first inversion)" },
          { id: "b", label: "A C chord and an E chord played together" },
          { id: "c", label: "A C chord played on the E string only" },
          { id: "d", label: "The key changing from C to E" },
        ],
        correctChoiceId: "a",
        explanation: "A slash chord names the bass note after the slash: C/E means a C chord voiced with E as the lowest note — a first inversion.",
      },
      {
        dimension: "reasoning",
        prompt: "How does the difference between 'close' and 'open' voicings affect a chord's sound?",
        choices: [
          { id: "a", label: "Close voicings sound dense and blended; open (spread) voicings sound more spacious and resonant" },
          { id: "b", label: "Close voicings are always louder" },
          { id: "c", label: "Open voicings change the chord's root" },
          { id: "d", label: "There is no audible difference" },
        ],
        correctChoiceId: "a",
        explanation: "Packing notes tightly (close voicing) yields a dense, blended sound, while spacing them widely (open voicing) yields a spacious, ringing sound — one way voicing shapes a chord's texture and colour.",
      },
    ],
    sources: [
      { label: "Open Music Theory: voice leading and voicings", note: "Open textbook material on inversions and chord voicing.", type: "Textbook", url: "https://openmusictheory.github.io/" },
      { label: "Inversion (music) (overview)", note: "Reference on chord inversions and slash chords.", type: "Reference", url: "https://en.wikipedia.org/wiki/Inversion_(music)" },
    ],
  },
  {
    concept: "Functional Harmony",
    level: "A-level",
    summary: "tonic, predominant and dominant roles inside tonal progressions",
    estimatedMinutes: 8,
    deck: "Chord progressions are not random sequences; they are journeys with a sense of departure and return. Functional harmony is the grammar behind this — the idea that in a key, each chord plays a role of stability, tension or preparation, and that music moves through these roles to create the feeling of going somewhere and coming home.",
    keyTerms: [
      { label: "Function", value: "A chord's role in a key: tonic (home), dominant (tension) or predominant (preparation)." },
      { label: "Tonic", value: "The chord of rest and resolution, built on the 1st degree." },
      { label: "Dominant", value: "The chord of maximum tension (built on the 5th) that pulls to the tonic." },
      { label: "Predominant", value: "Chords (like the 4th) that set up and lead into the dominant." },
    ],
    sections: [
      {
        heading: "Chords with jobs",
        body: [
          `Functional harmony is the theory that, within a key, chords are not interchangeable but have specific roles or "functions" — jobs they do in creating the sense of tension and resolution that drives tonal music. The core insight is that a progression is a journey away from and back to a point of rest, and each chord's function is its part in that journey. This is why some progressions feel satisfying and complete while others feel unresolved or aimless: it depends on how they move through these functions.`,
          `The functions are usually grouped into three: tonic (the home, a point of rest and stability), dominant (the point of maximum tension, which strongly wants to resolve home), and predominant or subdominant (chords that move away from home and set up the dominant). Music typically moves tonic → predominant → dominant → tonic, a cycle of departure, building tension, and return. Understanding these roles lets you hear and construct progressions that actually go somewhere.`,
        ],
      },
      {
        heading: "The three functions",
        body: [
          `The tonic chord, built on the 1st degree of the key, is home. It is where the music feels at rest and resolved, and where a piece usually begins and ends. Everything else is understood in relation to it. The dominant chord, built on the 5th degree (and especially as a dominant seventh), is the opposite: the chord of greatest instability and tension, containing that restless tritone, which creates a powerful pull back to the tonic. The dominant-to-tonic move (V–I) is the strongest, most conclusive gesture in tonal music.`,
          `Between them lie the predominant chords, most importantly the one built on the 4th degree (the subdominant). These chords move the music away from the tonic and prepare, or lead into, the dominant, building the tension before its release. The chord on the 2nd degree also commonly serves this preparatory role. So the classic functional flow is tonic (home) → predominant (departure) → dominant (tension) → tonic (resolution) — a complete narrative arc of harmonic tension and release built from these three roles.`,
        ],
      },
      {
        heading: "Why chords move as they do",
        body: [
          `Functional harmony explains the logic behind common progressions that might otherwise seem arbitrary. The ubiquitous I–IV–V progression, the backbone of countless rock, folk and blues songs, is simply tonic → predominant → dominant, moving through all three functions. The I–V–vi–IV progression behind an enormous number of pop songs works because of how it moves between functional areas, always creating and resolving tension in satisfying ways. The chords are not chosen at random; they are chosen for the functional journey they create.`,
          `This is why understanding function is more powerful than memorising specific progressions. Once you grasp that music moves through zones of stability and tension, you can understand why a progression works, predict where it wants to go, and write your own progressions that have direction and resolution. You can also hear when a songwriter deliberately subverts the expected functional motion for effect — delaying a resolution, or substituting an unexpected chord — because you understand the norm being played against.`,
        ],
      },
      {
        heading: "Tension and release as the engine",
        body: [
          `At its heart, functional harmony is about tension and release, which is the fundamental engine of emotional effect in tonal music. The dominant creates tension; the tonic releases it; and the satisfaction we feel when a progression resolves home is the release of harmonic tension that was carefully built. Composers manipulate this constantly — building tension by prolonging the dominant or delaying the return, then delivering release, or withholding it to keep the listener yearning.`,
          `This tension-and-release framework is why tonal music feels like it has direction and momentum, a sense of going somewhere rather than just sounding pretty. It gives music a narrative shape: setting out from home, venturing into tension, and returning with a sense of arrival. Even listeners with no theory training feel this deeply; they sense when music is "unresolved" and want it to complete. Functional harmony is the explanation of that universal feeling, and mastering it gives a musician control over one of the most powerful emotional tools in the art.`,
        ],
      },
      {
        heading: "Why a song feels finished",
        body: [
          `You feel functional harmony every time a song sounds like it has "come home" at the end, or leaves you hanging when it stops on the wrong chord. The overwhelming satisfaction of a final chord is the dominant's tension resolving to the tonic — pure functional release. When you sense a chorus building and then "landing", you are hearing movement through predominant and dominant back to tonic. On guitar, once you know that the chord on the 5th pulls hard to the 1st, and the 4th prepares the way, you can hear why your favourite progressions work and write ones that feel like they truly go somewhere. That universal sense of departure, tension and homecoming in music is functional harmony doing its quiet, powerful work.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What does functional harmony say about chords in a key?",
        choices: [
          { id: "a", label: "They have specific roles — tonic, predominant, dominant — in creating tension and resolution" },
          { id: "b", label: "They are all interchangeable" },
          { id: "c", label: "They have no relationship to the key" },
          { id: "d", label: "Only the tonic chord matters" },
        ],
        correctChoiceId: "a",
        explanation: "Functional harmony holds that each chord plays a role in the journey of departure and return — tonic (home), dominant (tension), predominant (preparation) — which is why progressions feel satisfying or aimless.",
      },
      {
        dimension: "depth",
        prompt: "Which chord is the point of greatest tension that pulls strongly to the tonic?",
        choices: [
          { id: "a", label: "The tonic, on the 1st degree" },
          { id: "b", label: "The dominant, on the 5th degree" },
          { id: "c", label: "The subdominant, on the 4th degree" },
          { id: "d", label: "The chord on the 2nd degree" },
        ],
        correctChoiceId: "b",
        explanation: "The dominant, built on the 5th degree, is the chord of maximum instability — containing a restless tritone — creating a powerful pull back to the tonic, the strongest gesture in tonal music.",
      },
      {
        dimension: "depth",
        prompt: "What is the classic functional flow of a progression?",
        choices: [
          { id: "a", label: "Tonic → predominant → dominant → tonic" },
          { id: "b", label: "Dominant → dominant → dominant → tonic" },
          { id: "c", label: "Tonic → tonic → tonic → tonic" },
          { id: "d", label: "Predominant → tonic → predominant → dominant" },
        ],
        correctChoiceId: "a",
        explanation: "Music typically moves from tonic (home) to predominant (departure) to dominant (tension) and back to tonic (resolution) — a complete arc of harmonic departure, tension and return.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is understanding function more powerful than memorising specific progressions?",
        choices: [
          { id: "a", label: "It lets you understand why a progression works, predict where it wants to go, and write your own with direction" },
          { id: "b", label: "It removes the need to play any chords" },
          { id: "c", label: "It only applies to one song" },
          { id: "d", label: "It makes all progressions sound identical" },
        ],
        correctChoiceId: "a",
        explanation: "Grasping that music moves through zones of stability and tension explains why common progressions like I–IV–V work, lets you predict and write progressions with direction, and lets you hear deliberate subversions.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does tonal music feel like it has direction and momentum?",
        choices: [
          { id: "a", label: "Because tension and release — building tension on the dominant and releasing it to the tonic — gives it a narrative shape" },
          { id: "b", label: "Because the tempo always increases" },
          { id: "c", label: "Because it never resolves" },
          { id: "d", label: "Because all the chords are the same" },
        ],
        correctChoiceId: "a",
        explanation: "The dominant builds tension and the tonic releases it, giving music a narrative arc of departure, tension and homecoming — the fundamental engine of emotional effect that even untrained listeners feel.",
      },
    ],
    sources: [
      { label: "Open Music Theory: harmonic function", note: "Open textbook material on tonic, predominant and dominant function.", type: "Textbook", url: "https://openmusictheory.github.io/" },
      { label: "Function (music) (overview)", note: "Reference on harmonic function and tonal progressions.", type: "Reference", url: "https://en.wikipedia.org/wiki/Function_(music)" },
    ],
  },
  {
    concept: "Cadences",
    level: "A-level",
    summary: "harmonic punctuation that creates arrival, pause or continuation",
    estimatedMinutes: 8,
    deck: "If a chord progression is a sentence, cadences are its punctuation — the harmonic gestures that end a phrase with a full stop, a comma, or a suspenseful dash. Learning to recognise cadences is learning to hear the phrasing of music: where it pauses, where it turns, and where it finally comes to rest.",
    keyTerms: [
      { label: "Cadence", value: "A chord progression that concludes a musical phrase, giving a sense of closure or pause." },
      { label: "Authentic cadence", value: "Dominant to tonic (V–I), the strongest, most conclusive ending." },
      { label: "Plagal cadence", value: "Subdominant to tonic (IV–I), the gentle 'amen' ending." },
      { label: "Half and deceptive cadences", value: "Endings that pause on the dominant, or resolve to an unexpected chord." },
    ],
    sections: [
      {
        heading: "Harmonic punctuation",
        body: [
          `A cadence is a harmonic formula that ends a musical phrase, functioning like punctuation in language. Just as a sentence can end with a full stop, a comma, a question mark, or trail off with a dash, a musical phrase can end with different kinds of cadence that give different degrees and types of closure. Cadences are how music articulates its structure, marking the ends of phrases and sections and telling the listener where they are in the musical journey.`,
          `This is essential to how we perceive music. Cadences create the sense of phrasing — of music being organised into breathing units rather than an undifferentiated stream. They shape expectation: a strong cadence signals arrival and completion, while a weak or open one signals that more is to come. Recognising cadences lets you hear the architecture of a piece, and understanding them lets a musician control the flow of tension and rest, closing off ideas or leaving them hanging as the music requires.`,
        ],
      },
      {
        heading: "The two closing cadences",
        body: [
          `The strongest and most common closing gesture is the authentic (or perfect) cadence: the dominant moving to the tonic, V–I. This is the full stop of music, the most conclusive ending, delivering the satisfying resolution of the dominant's tension to the tonic's rest. Nearly every piece of tonal music ends with an authentic cadence, and its arrival gives the powerful sense of "we're home" that concludes a phrase or a whole work.`,
          `The other closing gesture is the plagal cadence: the subdominant moving to the tonic, IV–I. This is gentler and less strongly conclusive than the authentic cadence, with a softer, more settled quality. It is famous as the "Amen" sung at the end of hymns, which is exactly a IV–I plagal cadence, and it appears often in gospel, rock and folk for its warm, restful finality. Both cadences end on the tonic, but the authentic arrives with a strong pull and the plagal with a gentle settling.`,
        ],
      },
      {
        heading: "Cadences that don't fully close",
        body: [
          `Not all cadences resolve to home; some deliberately withhold closure. The half cadence ends a phrase on the dominant rather than the tonic, leaving the music hanging in tension, unresolved — the musical equivalent of a comma or a question mark. It creates a sense of pause and expectation, of "to be continued", and is often used at the end of the first half of a musical sentence, setting up a resolution to come. A phrase ending on a half cadence feels open, demanding an answer.`,
          `The deceptive (or interrupted) cadence is subtler still: it sets up the strong V–I resolution but, at the last moment, resolves the dominant to an unexpected chord instead of the tonic — usually the chord on the 6th degree. The listener's ear expects home and is surprised, creating a moment of harmonic misdirection that can be poignant, dramatic or simply prolonging. It is a way of extending a phrase, denying the expected arrival to keep the music going and heighten the eventual resolution when it finally comes.`,
        ],
      },
      {
        heading: "Cadences shape the whole structure",
        body: [
          `Cadences operate at every level of musical structure, from the ends of small two- or four-bar phrases up to the conclusions of entire sections and movements. The pattern of cadences gives a piece its sense of form: a common design pairs an opening phrase ending on an inconclusive half cadence with an answering phrase ending on a conclusive authentic cadence, creating a question-and-answer, antecedent-and-consequent shape that is deeply satisfying. This interplay of open and closed endings is fundamental to how musical form works.`,
          `For a player or writer, controlling cadences means controlling the punctuation and pacing of music. You can drive to a strong authentic cadence for a decisive arrival, use a half cadence to create suspense and forward motion, or deploy a deceptive cadence to surprise and extend. Understanding cadences turns a progression from a flat list of chords into a shaped phrase with a beginning, middle and considered end. They are among the most practical and immediately useful concepts in harmony, because they are how music breathes.`,
        ],
      },
      {
        heading: "The endings you already feel",
        body: [
          `You respond to cadences instinctively. The rock-solid finality when a song lands on its final chord is an authentic cadence; the warm "Amen" at the end of a hymn is a plagal cadence you have heard countless times. When a phrase stops on a chord that leaves you hanging, expecting more — the classic sound of a verse pausing before the chorus — that is a half cadence. And that little jolt of surprise when a song seems about to resolve but veers to an unexpected chord is a deceptive cadence. On guitar, ending a phrase on the 5th chord to create suspense, or the 1st to conclude, is using cadences directly. They are the punctuation that lets music feel like phrases and sentences rather than an endless run-on of chords.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a cadence?",
        choices: [
          { id: "a", label: "A harmonic formula that ends a musical phrase, like punctuation in language" },
          { id: "b", label: "The speed of a piece of music" },
          { id: "c", label: "A single loud chord" },
          { id: "d", label: "The key a song is in" },
        ],
        correctChoiceId: "a",
        explanation: "A cadence concludes a phrase, functioning like punctuation — a full stop, comma or dash — articulating musical structure and telling the listener where they are in the journey.",
      },
      {
        dimension: "depth",
        prompt: "What chords make up an authentic (perfect) cadence?",
        choices: [
          { id: "a", label: "Dominant to tonic (V–I)" },
          { id: "b", label: "Subdominant to tonic (IV–I)" },
          { id: "c", label: "Tonic to dominant (I–V)" },
          { id: "d", label: "Tonic to subdominant (I–IV)" },
        ],
        correctChoiceId: "a",
        explanation: "The authentic cadence is V–I, dominant to tonic — the strongest, most conclusive ending, resolving the dominant's tension to the tonic's rest, the 'full stop' of music.",
      },
      {
        dimension: "depth",
        prompt: "The 'Amen' sung at the end of a hymn is an example of which cadence?",
        choices: [
          { id: "a", label: "A plagal cadence (IV–I)" },
          { id: "b", label: "A half cadence" },
          { id: "c", label: "A deceptive cadence" },
          { id: "d", label: "An authentic cadence (V–I)" },
        ],
        correctChoiceId: "a",
        explanation: "The plagal cadence, subdominant to tonic (IV–I), is the gentle, settled 'Amen' ending — softer and less strongly conclusive than the authentic cadence, though both end on the tonic.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does a half cadence create a sense of 'to be continued'?",
        choices: [
          { id: "a", label: "Because it ends on the dominant rather than the tonic, leaving the music hanging in unresolved tension" },
          { id: "b", label: "Because it resolves fully to home" },
          { id: "c", label: "Because it uses only the tonic chord" },
          { id: "d", label: "Because it always ends a whole piece" },
        ],
        correctChoiceId: "a",
        explanation: "A half cadence ends a phrase on the dominant, leaving tension unresolved — the musical equivalent of a comma or question mark — creating expectation and setting up a resolution to come.",
      },
      {
        dimension: "reasoning",
        prompt: "What makes a deceptive cadence 'deceptive'?",
        choices: [
          { id: "a", label: "It sets up the expected V–I resolution but resolves the dominant to an unexpected chord instead of the tonic" },
          { id: "b", label: "It plays the wrong key entirely" },
          { id: "c", label: "It resolves exactly as expected" },
          { id: "d", label: "It has no dominant chord" },
        ],
        correctChoiceId: "a",
        explanation: "A deceptive cadence leads the ear to expect the tonic after the dominant but veers to an unexpected chord (often the 6th degree), surprising the listener and extending the phrase by denying the expected arrival.",
      },
    ],
    sources: [
      { label: "musictheory.net / Open Music Theory: cadences", note: "Lessons on cadence types and their functions.", type: "Reference", url: "https://openmusictheory.github.io/" },
      { label: "Cadence (overview)", note: "Reference on authentic, plagal, half and deceptive cadences.", type: "Reference", url: "https://en.wikipedia.org/wiki/Cadence" },
    ],
  },
  {
    concept: "Rhythm and Meter",
    level: "GCSE",
    summary: "the organisation of beats, accents and subdivisions over time",
    estimatedMinutes: 7,
    deck: "Pitch gets most of the attention, but rhythm is arguably more fundamental — you can recognise a song from its rhythm alone, and a wrong note is forgivable where a wrong beat is not. Rhythm and meter are how music organises time into a felt pulse, and mastering them is the true foundation of playing that grooves.",
    keyTerms: [
      { label: "Beat", value: "The steady underlying pulse of music that you tap your foot to." },
      { label: "Meter", value: "The grouping of beats into regular patterns of strong and weak (measures)." },
      { label: "Time signature", value: "The notation showing how many beats are in each measure and their value." },
      { label: "Subdivision", value: "Dividing each beat into smaller equal parts for finer rhythms." },
    ],
    sections: [
      {
        heading: "The pulse underneath",
        body: [
          `Rhythm is the organisation of music in time, and at its foundation is the beat: the steady, regular pulse you instinctively tap your foot or nod your head to. This underlying pulse is the heartbeat of a piece, the framework against which all the notes are placed. Everything rhythmic in music is measured against this steady beat, whether notes fall right on it, between beats, or are held across several.`,
          `Rhythm is in some ways more fundamental than pitch. You can often recognise a familiar song from its rhythm alone, tapped out with no melody, and audiences forgive a wrong note far more readily than a stumble in the beat. For a guitarist, solid rhythm is the true foundation of good playing: a player with impeccable timing and feel but modest technique sounds better than a technical wizard with poor time. Time is the ground everything else stands on.`,
        ],
      },
      {
        heading: "Grouping beats into meter",
        body: [
          `Beats are not all equal; they group into regular patterns of strong and weak, and this grouping is meter. We naturally feel beats organised into small repeating cycles — most commonly groups of four (ONE-two-three-four, ONE-two-three-four) or three (ONE-two-three, as in a waltz). The first beat of each group typically feels strongest, giving music its sense of regular pulse and downbeat. These groups are called measures or bars, and they are the basic units into which musical time is divided.`,
          `This metric grouping is what lets music feel organised rather than a formless stream of beats. The pattern of strong and weak beats — the meter — shapes how we perceive and feel the rhythm, and different meters have different characters: the steady four-square feel of common time, the lilting sway of a triple meter. Feeling the meter, knowing where "one" is, is essential to playing in time with others and to making rhythm feel grounded rather than adrift.`,
        ],
      },
      {
        heading: "Time signatures",
        body: [
          `Meter is notated with a time signature: two numbers written at the start of the music, like 4/4 or 3/4. The top number tells you how many beats are in each measure; the bottom number tells you what kind of note gets one beat. The most common is 4/4, so common it is called "common time" — four quarter-note beats per measure — the meter of the vast majority of pop, rock and folk. 3/4 gives three beats per measure, the waltz feel; 6/8 has a rolling, compound feel of two groups of three.`,
          `Knowing the time signature tells you how to count and feel a piece: where the measures fall and where the strong beat lands. While most popular music sits comfortably in 4/4, other meters give music distinctive character, and some songs use unusual or shifting time signatures for a deliberately off-kilter feel. Being able to identify and count in a meter — to know whether you are in four, in three, or something less common — is a basic literacy that lets you learn songs accurately and play in time.`,
        ],
      },
      {
        heading: "Subdividing the beat",
        body: [
          `Rhythm gets its detail from subdivision: dividing each beat into smaller equal parts. A beat can be split into two (eighth notes: "one-and, two-and"), into four (sixteenth notes: "one-e-and-a"), into three (triplets), and further. These subdivisions are the grid on which finer rhythms are placed, letting notes fall not just on the beats but precisely between them. Counting subdivisions aloud is how musicians place syncopated and intricate rhythms accurately.`,
          `Feeling subdivisions, not just beats, is a mark of good rhythmic control. A player who internally feels the "and"s and "e-and-a"s between the beats can place notes with precision and lock into a groove, while one who feels only the main beats tends to rush or drift in the spaces between. Much of what makes a strummed or picked guitar part feel tight and rhythmic is the accurate placement of notes on a felt subdivision grid. Rhythm, at bottom, is the art of dividing and organising time, and subdivision is the tool that gives it fine resolution.`,
        ],
      },
      {
        heading: "The foot that taps itself",
        body: [
          `You are a natural rhythmician. Your foot taps the beat without instruction; you feel where "one" is in a song and clap on the right beats; you can recognise a tune from its rhythm alone. When you count a band in ("one, two, three, four") you are establishing meter; when you feel a waltz sway differently from a rock beat, you are feeling the difference between triple and quadruple meter. On guitar, the moment your strumming locks tightly to the pulse and its subdivisions, rather than drifting, your playing suddenly grooves. Understanding beat, meter and subdivision just makes explicit the rhythmic sense you already have — and sharpens it into the timing that is the real foundation of playing well.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is the 'beat' in music?",
        choices: [
          { id: "a", label: "The steady, regular pulse you tap your foot to" },
          { id: "b", label: "The highest note in a melody" },
          { id: "c", label: "The name of a chord" },
          { id: "d", label: "The loudest moment in a song" },
        ],
        correctChoiceId: "a",
        explanation: "The beat is the steady underlying pulse — the heartbeat of a piece — against which all notes are measured, whether they fall on it, between beats, or are held across several.",
      },
      {
        dimension: "depth",
        prompt: "What is 'meter'?",
        choices: [
          { id: "a", label: "The grouping of beats into regular patterns of strong and weak (measures)" },
          { id: "b", label: "The speed of the music in beats per minute" },
          { id: "c", label: "The pitch of the lowest string" },
          { id: "d", label: "The length of a whole song" },
        ],
        correctChoiceId: "a",
        explanation: "Meter is how beats group into small repeating cycles of strong and weak — commonly four or three — with the first beat strongest, dividing musical time into measures.",
      },
      {
        dimension: "depth",
        prompt: "In a time signature like 4/4, what does the top number tell you?",
        choices: [
          { id: "a", label: "How many beats are in each measure" },
          { id: "b", label: "The key of the piece" },
          { id: "c", label: "How fast to play" },
          { id: "d", label: "Which strings to use" },
        ],
        correctChoiceId: "a",
        explanation: "The top number gives the number of beats per measure (four in 4/4), while the bottom number shows what kind of note gets one beat — so 4/4 is four quarter-note beats per measure.",
      },
      {
        dimension: "depth",
        prompt: "What is 'subdivision' in rhythm?",
        choices: [
          { id: "a", label: "Dividing each beat into smaller equal parts, like eighths or sixteenths" },
          { id: "b", label: "Splitting a band into sections" },
          { id: "c", label: "Playing in a lower octave" },
          { id: "d", label: "Skipping every other beat" },
        ],
        correctChoiceId: "a",
        explanation: "Subdivision divides each beat into smaller equal parts — two (eighths), four (sixteenths), three (triplets) — creating the grid on which finer rhythms are placed between the main beats.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does feeling subdivisions, not just beats, improve rhythmic playing?",
        choices: [
          { id: "a", label: "It lets you place notes precisely between beats and lock into a groove, rather than rushing or drifting in the gaps" },
          { id: "b", label: "It makes the music louder" },
          { id: "c", label: "It changes the key" },
          { id: "d", label: "It removes the need for a beat" },
        ],
        correctChoiceId: "a",
        explanation: "A player who internally feels the 'and's and 'e-and-a's between beats places notes accurately and grooves, while one feeling only the main beats tends to rush or drift — precise placement on the subdivision grid is what makes a part feel tight.",
      },
    ],
    sources: [
      { label: "musictheory.net: rhythm and meter", note: "Free lessons on beats, measures, time signatures and note values.", type: "Reference", url: "https://www.musictheory.net/lessons/12" },
      { label: "Metre (music) (overview)", note: "Reference on meter, time signatures and rhythmic organisation.", type: "Reference", url: "https://en.wikipedia.org/wiki/Metre_(music)" },
    ],
  },
  {
    concept: "Syncopation and Groove",
    level: "A-level",
    summary: "accenting weak beats or offbeats to create forward motion",
    estimatedMinutes: 8,
    deck: "Straight, on-the-beat rhythm is solid but square. The magic that makes music groove — that makes you want to move — usually comes from syncopation: deliberately placing accents where you don't expect them, on the weak beats and in the gaps, creating a tension and momentum that on-the-beat playing never can.",
    keyTerms: [
      { label: "Syncopation", value: "Placing accents on normally weak beats or offbeats, against the expected pulse." },
      { label: "Offbeat", value: "The 'and' between the main beats, where syncopated accents often land." },
      { label: "Groove", value: "The compelling rhythmic feel that makes music propulsive and danceable." },
      { label: "Backbeat", value: "The emphasis on beats 2 and 4 that drives rock, pop and soul." },
    ],
    sections: [
      {
        heading: "Accents in the wrong place",
        body: [
          `In any meter, some beats are naturally strong and others weak — in common time, the "one" and "three" are strong, the "two" and "four" weaker, and the offbeats (the "and"s between the beats) weaker still. Syncopation is the deliberate placement of accents or notes on these normally weak positions, against the expected pattern of strong and weak. It disrupts the straightforward, on-the-beat flow, creating rhythmic surprise, tension and energy.`,
          `This "wrong-footing" of the accent is the source of much of music's rhythmic excitement. When a note lands where the ear does not expect emphasis — on a weak beat or an offbeat — it creates a little jolt of tension that propels the music forward. Straight, on-the-beat rhythm is stable but can feel stiff and predictable; syncopation injects life, unpredictability and momentum. Nearly every style that makes you want to move — funk, jazz, reggae, Latin, much pop and rock — relies heavily on syncopation.`,
        ],
      },
      {
        heading: "The offbeat and the backbeat",
        body: [
          `Two forms of rhythmic emphasis are especially important. Emphasising the offbeats — the "and"s between the main beats — is a core source of groove; when accents fall in these gaps, the rhythm feels buoyant and propulsive rather than plodding. Reggae and ska famously build their entire feel on offbeat accents (the guitar "chop" on the offbeats), and funk guitar is largely the art of placing sharp, syncopated accents in the spaces between the beats.`,
          `The other is the backbeat: emphasising beats two and four in common time, rather than the naturally strong one and three. This is the driving pulse of rock, pop, soul and R&B — the beats where the snare drum typically cracks and where audiences clap. The backbeat is technically a form of syncopation, shifting emphasis onto weaker beats, and it is so fundamental to popular music that clapping on one and three instead of two and four immediately marks someone as "off". These displaced accents are what give popular music its characteristic drive.`,
        ],
      },
      {
        heading: "What makes a groove",
        body: [
          `Groove is the compelling, propulsive rhythmic feel that makes music lock in and move — the quality that makes a track irresistible to nod or dance to. It arises from the interaction of syncopation, consistent rhythmic patterns, and precise, feelingful timing. A groove is not just any rhythm but a rhythm with a certain infectious quality, usually built on syncopated accents that create a sense of momentum and a "pocket" the music sits in. Groove is felt as much as understood, but it is built from these rhythmic principles.`,
          `Crucially, groove depends on more than just where the notes are written; it depends on feel — subtle variations in timing and emphasis that give a rhythm life. Great rhythm players place notes fractionally ahead of or behind the strict beat, and accent certain notes over others, to create a feel that a rigid, mechanically perfect performance lacks. This is why a human drummer or guitarist can groove in a way that a perfectly quantised machine often cannot: groove lives in the tiny, expressive imperfections and emphases layered on top of a solid rhythmic framework.`,
        ],
      },
      {
        heading: "Syncopation on the guitar",
        body: [
          `For a guitarist, syncopation is central to rhythm playing. Funk guitar is essentially a study in syncopation: tight, muted, percussive strums placed on offbeats and syncopated positions, with silence between them, creating a rhythmic conversation with the drums. Reggae and ska guitar live on the offbeat chop. Even in rock and pop, the difference between a stiff, amateurish strumming pattern and one that grooves is usually the syncopation — the way accents are displaced onto weaker beats and offbeats.`,
          `Developing this requires feeling the subdivisions of the beat solidly (so you can place accents precisely off the beat), controlling which strums are accented and which muted, and internalising the feel of a groove until it becomes natural. It is one of the most valuable and often neglected areas of guitar study, because rhythm playing is what a guitarist does most of the time, and syncopation is what makes rhythm playing come alive. A player who grooves is worth far more to a band than one who merely plays the right notes squarely on the beat.`,
        ],
      },
      {
        heading: "Why you clap on two and four",
        body: [
          `You feel syncopation whenever music makes you want to move. The reason a funk or reggae track is so danceable, while a nursery rhyme is not, is the syncopated, offbeat placement of its accents. When a crowd claps along to a rock song, they clap on beats two and four — the backbeat — and clapping on one and three instead feels instantly wrong, which is syncopation you already know in your body. On guitar, the moment your strumming stops being a stiff down-up-down and starts placing sharp accents in the gaps between beats, it begins to groove. Understanding syncopation just names the thing that has always made your favourite music irresistible: the accent landing where you didn't expect it.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is syncopation?",
        choices: [
          { id: "a", label: "Placing accents on normally weak beats or offbeats, against the expected pulse" },
          { id: "b", label: "Playing every note exactly on the strong beats" },
          { id: "c", label: "Speeding up the tempo" },
          { id: "d", label: "Playing without any rhythm" },
        ],
        correctChoiceId: "a",
        explanation: "Syncopation deliberately places accents on weak beats or offbeats, wrong-footing the ear and creating rhythmic tension, surprise and forward momentum that on-the-beat playing lacks.",
      },
      {
        dimension: "depth",
        prompt: "What is the 'backbeat'?",
        choices: [
          { id: "a", label: "Emphasising beats two and four rather than the naturally strong one and three" },
          { id: "b", label: "Playing the beat backwards" },
          { id: "c", label: "The last beat of a song" },
          { id: "d", label: "Emphasising only beat one" },
        ],
        correctChoiceId: "a",
        explanation: "The backbeat stresses beats two and four — where the snare cracks and audiences clap — the driving pulse of rock, pop and soul, and technically a form of syncopation onto weaker beats.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does syncopation make music feel more propulsive than straight on-the-beat rhythm?",
        choices: [
          { id: "a", label: "An accent landing where the ear does not expect emphasis creates a jolt of tension that propels the music forward" },
          { id: "b", label: "It makes the music slower and calmer" },
          { id: "c", label: "It removes the beat entirely" },
          { id: "d", label: "It always makes music quieter" },
        ],
        correctChoiceId: "a",
        explanation: "When a note lands on a weak beat or offbeat, the unexpected emphasis creates rhythmic tension that drives the music forward, while straight on-the-beat rhythm, though stable, can feel stiff and predictable.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can a human player groove in a way a perfectly quantised machine often cannot?",
        choices: [
          { id: "a", label: "Because groove lives in subtle, expressive variations in timing and emphasis layered on a solid framework" },
          { id: "b", label: "Because machines cannot play any rhythm" },
          { id: "c", label: "Because humans always play faster" },
          { id: "d", label: "Because groove requires wrong notes" },
        ],
        correctChoiceId: "a",
        explanation: "Groove depends on feel — placing notes fractionally ahead of or behind the strict beat and accenting certain notes — so the tiny expressive imperfections a human adds create a life that a rigidly perfect performance lacks.",
      },
      {
        dimension: "depth",
        prompt: "Why is syncopation central to funk and reggae guitar?",
        choices: [
          { id: "a", label: "Their feel is built on sharp, muted accents placed on offbeats and syncopated positions, with silence between" },
          { id: "b", label: "They avoid all syncopation and play on the beat" },
          { id: "c", label: "They use no rhythm guitar" },
          { id: "d", label: "They only play long sustained chords" },
        ],
        correctChoiceId: "a",
        explanation: "Funk guitar places tight percussive strums on offbeats with silence between, and reggae lives on the offbeat chop — both are studies in syncopation, which is what makes their rhythm playing groove.",
      },
    ],
    sources: [
      { label: "Syncopation (overview)", note: "Reference on syncopation, offbeats and the backbeat.", type: "Reference", url: "https://en.wikipedia.org/wiki/Syncopation" },
      { label: "Groove (music) (overview)", note: "Reference on groove and rhythmic feel.", type: "Reference", url: "https://en.wikipedia.org/wiki/Groove_(music)" },
    ],
  },
  {
    concept: "Modes on the Fretboard",
    level: "University",
    summary: "scale rotations with distinct centres, intervals and harmonic colours",
    estimatedMinutes: 9,
    deck: "Play the notes of C major but treat D as home, and you get a different scale with a different flavour — Dorian. Modes are the major scale's notes seen from different starting points, each with its own emotional colour, and understanding them unlocks a whole palette of sounds from patterns you may already know.",
    keyTerms: [
      { label: "Mode", value: "A scale formed by treating a different degree of the parent scale as the tonic." },
      { label: "Parent scale", value: "The scale (often major) whose notes the modes are drawn from." },
      { label: "Characteristic note", value: "The one note that gives each mode its distinctive colour." },
      { label: "Modal centre", value: "The note or chord a mode revolves around, established by a drone or vamp." },
    ],
    sections: [
      {
        heading: "The same notes, a different home",
        body: [
          `A mode is what you get when you take the notes of a scale but treat a different note as the tonic, the home. The seven modes of the major scale are formed by starting on each of its seven degrees in turn. Play the notes of C major starting and centring on C, and you have the major scale (called the Ionian mode). Play the same notes but centre on D, and you have D Dorian; centre on E, and you have E Phrygian, and so on through all seven. Same notes, seven different homes, seven different scales.`,
          `Because each mode centres on a different note, the pattern of whole and half steps relative to that home is different, and so is the sound. The mode's character comes from where its half steps fall relative to its tonic. This is why the modes, though built from identical notes, have genuinely different flavours — from bright to dark to exotic — and why learning them expands your palette of sounds without necessarily learning new fingerings.`,
        ],
      },
      {
        heading: "The seven flavours",
        body: [
          `The seven modes range along a spectrum from bright to dark. Ionian is the ordinary major scale — bright and stable. Lydian is major-like but even brighter and more floating, thanks to a raised fourth, a dreamy, filmic sound. Mixolydian is major with a flattened seventh, giving a bluesy, dominant, rock-and-roll flavour. Dorian is a minor-type mode but with a raised sixth that makes it sound minor yet hopeful, hip and jazzy — hugely popular in rock, funk and jazz.`,
          `On the darker side, Aeolian is the natural minor scale — the standard minor sound. Phrygian is minor with a flattened second, giving a tense, Spanish or metal flavour. Locrian, built on the seventh degree, is the darkest and most unstable, with both a flattened second and a flattened fifth, so unsettled that it is rarely used as a tonal centre. Each mode's distinctive colour comes down to one or two "characteristic notes" that differ from the plain major or minor scale — Lydian's sharp fourth, Mixolydian's flat seventh, Dorian's natural sixth, Phrygian's flat second.`,
        ],
      },
      {
        heading: "Two ways to think about modes",
        body: [
          `There are two complementary ways to understand modes, and confusing them causes much of the difficulty players have. The "derivative" view sees a mode as the parent scale started from a different degree: D Dorian is "the notes of C major starting on D". This is handy for finding the notes on the fretboard, since you already know the shape. The "parallel" view compares each mode to the major or minor scale on the same root: D Dorian is "D minor with a raised sixth". This is better for understanding a mode's actual sound and character.`,
          `Both views are useful, but the parallel view is often more musically meaningful, because it tells you what makes each mode sound the way it does relative to a familiar reference. Thinking of Mixolydian as "major with a flat seventh" immediately tells your ear and hand what to expect. The derivative view can mislead players into thinking modes are just the major scale in disguise, missing that a mode only sounds like itself when its own tonic is established as home.`,
        ],
      },
      {
        heading: "Making a mode sound modal",
        body: [
          `This last point is crucial and often missed: modes only work if the harmony establishes the mode's tonic as the centre. If you play the notes of C major over a C chord, it sounds like C major, no matter where you start your scale — the ear hears C as home. To make D Dorian actually sound like Dorian, the music must revolve around D as the tonal centre, typically with a D-based drone or a vamp on chords that imply D as home. Only then does the raised sixth register as Dorian's characteristic colour rather than just a note in C major.`,
          `This is why modal music often uses static harmony — a drone, a pedal note, or a repeating one- or two-chord vamp — rather than the busy functional progressions of major-minor tonality. Functional progressions constantly pull toward a single tonic and tend to override a modal centre. Modal music instead sits on its modal tonic, letting the mode's flavour come through. Understanding that a mode is a sound to be established, not just a scale to run, is the key that makes modal playing work rather than sounding like aimless major-scale noodling.`,
        ],
      },
      {
        heading: "The modal sounds in songs you know",
        body: [
          `You have heard modes without naming them. That bright, wondrous, floating film-score sound is often Lydian; the bluesy, swaggering rock sound of countless riffs is Mixolydian; the cool, hopeful-but-minor groove of much funk and jazz is Dorian; the dark, exotic, "Spanish" or metal flavour is Phrygian. Songs built on a single vamping chord or a droning bass, rather than a busy chord progression, are usually modal, letting one mode's colour shine. On guitar, once you can not only play a mode's notes but establish its tonic with a drone or vamp, you gain access to a whole spectrum of moods beyond plain major and minor — the difference between running scales and actually painting with modal colour.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a mode?",
        choices: [
          { id: "a", label: "A scale formed by treating a different degree of a parent scale as the tonic" },
          { id: "b", label: "A faster way of playing a scale" },
          { id: "c", label: "A type of guitar amplifier setting" },
          { id: "d", label: "A chord with seven notes" },
        ],
        correctChoiceId: "a",
        explanation: "A mode takes the notes of a scale but treats a different degree as home; the seven modes of the major scale each centre on a different degree, giving seven different flavours from the same notes.",
      },
      {
        dimension: "depth",
        prompt: "What characteristic note gives Mixolydian its bluesy, dominant flavour?",
        choices: [
          { id: "a", label: "A flattened seventh (making it major with a flat 7)" },
          { id: "b", label: "A raised fourth" },
          { id: "c", label: "A flattened second" },
          { id: "d", label: "A raised sixth" },
        ],
        correctChoiceId: "a",
        explanation: "Mixolydian is the major scale with a flattened seventh, giving the bluesy, rock-and-roll, dominant sound — its characteristic note is that flat 7, distinguishing it from plain major.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is the 'parallel' view (e.g. 'Dorian is minor with a raised sixth') often more musically meaningful than the 'derivative' view?",
        choices: [
          { id: "a", label: "It tells you what makes each mode sound the way it does relative to a familiar reference" },
          { id: "b", label: "It is the only way to find the notes on the fretboard" },
          { id: "c", label: "It proves modes are identical to the major scale" },
          { id: "d", label: "It ignores the mode's tonic" },
        ],
        correctChoiceId: "a",
        explanation: "The parallel view compares a mode to the major or minor scale on the same root, so 'major with a flat seventh' immediately tells your ear its character — whereas the derivative view can mislead you into thinking modes are just major in disguise.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does playing the notes of C major over a C chord NOT produce D Dorian, even if you start on D?",
        choices: [
          { id: "a", label: "Because the harmony establishes C as home, so the ear hears C major regardless of where the scale starts" },
          { id: "b", label: "Because D Dorian uses different notes from C major" },
          { id: "c", label: "Because Dorian cannot be played on guitar" },
          { id: "d", label: "Because starting note is all that matters" },
        ],
        correctChoiceId: "a",
        explanation: "A mode only sounds modal when its own tonic is established as the centre; over a C chord the ear hears C as home, so to get D Dorian the music must revolve around D via a drone or vamp.",
      },
      {
        dimension: "reasoning",
        prompt: "Why does modal music often use a drone or a one-chord vamp rather than busy chord progressions?",
        choices: [
          { id: "a", label: "Because functional progressions pull toward a single tonic and override the modal centre, while static harmony lets the mode's flavour come through" },
          { id: "b", label: "Because modal music cannot use any chords" },
          { id: "c", label: "Because vamps are easier to play" },
          { id: "d", label: "Because modes have no tonic" },
        ],
        correctChoiceId: "a",
        explanation: "Busy functional progressions constantly pull toward one tonic and tend to override a modal centre, so modal music sits on its modal tonic with a drone or repeating vamp, letting the mode's characteristic colour shine.",
      },
    ],
    sources: [
      { label: "Open Music Theory: modes", note: "Open textbook material on the modes of the major scale.", type: "Textbook", url: "https://openmusictheory.github.io/" },
      { label: "Mode (music) (overview)", note: "Reference on the seven modes and their characteristic notes.", type: "Reference", url: "https://en.wikipedia.org/wiki/Mode_(music)" },
    ],
  },
  {
    concept: "Pentatonic and Blues Language",
    level: "A-level",
    summary: "five-note frameworks and blue notes used in guitar melody and improvisation",
    estimatedMinutes: 8,
    deck: "The pentatonic scale is the first thing most guitarists solo with and the last thing many ever need — a five-note framework so forgiving and expressive that it underpins blues, rock, country and pop. Add one 'blue note' and a handful of expressive techniques, and you have the core vocabulary of the electric guitar.",
    keyTerms: [
      { label: "Pentatonic scale", value: "A five-note scale (major or minor) that omits the notes most likely to clash." },
      { label: "Minor pentatonic", value: "The five-note minor scale that is the backbone of blues and rock lead guitar." },
      { label: "Blue note", value: "An added, expressive flattened note (often the flat 5) giving the blues its cry." },
      { label: "Expressive techniques", value: "Bends, slides, vibrato and phrasing that turn scale notes into music." },
    ],
    sections: [
      {
        heading: "Five notes that always work",
        body: [
          `The pentatonic scale contains just five notes per octave, rather than the seven of the major or minor scale. Its power lies in what it leaves out: the pentatonic omits the notes most likely to clash with the underlying chords, leaving a subset that sounds consonant and safe over a wide range of harmony. This is why it is the beginner's gateway to soloing — you can play almost any note of the right pentatonic scale over a progression and it will sound reasonable, freeing you to focus on phrasing and feel rather than avoiding wrong notes.`,
          `There are two main pentatonic scales, the major and the minor pentatonic, which (like the major and minor scales) share the same notes as a relative pair. The minor pentatonic is the workhorse of blues and rock lead guitar: five notes that lie comfortably under the hand in a memorable "box" shape, movable to any key. Its forgiving, bluesy sound has made it the single most-used scale in electric guitar, the foundation on which most rock and blues soloing is built.`,
        ],
      },
      {
        heading: "The blue note",
        body: [
          `The blues adds one crucial ingredient to the minor pentatonic: the "blue note". Most commonly this is the flattened fifth, added to the minor pentatonic to create the "blues scale" — six notes that carry the characteristic aching, tense, expressive quality of the blues. This added note is dissonant and unstable, and that is precisely the point: used as a passing note or bent into, it provides the "cry" and grit that define blues phrasing. Blue notes are notes of tension deliberately introduced for their emotional bite.`,
          `The concept of blue notes reflects the blues' origins, where African musical traditions bent and inflected pitches in ways that fall "between" the fixed notes of the Western scale, creating expressive microtonal shadings. On guitar, this is captured through bending strings to reach or approach these in-between pitches. The blue note is not just an extra scale tone but a whole approach to pitch as something flexible and expressive, to be slid into, bent up to, and worried at, rather than played as a fixed, clean note.`,
        ],
      },
      {
        heading: "Technique makes the language",
        body: [
          `The pentatonic and blues scales are only the raw material; the language comes alive through expressive technique. The same handful of notes can sound like a beginner running a scale or like a master telling a story, and the difference is phrasing and articulation. Bending strings — pushing a string to raise its pitch, often to reach a blue note or a note above — is the signature expressive device of blues and rock guitar, giving notes a vocal, crying quality. Vibrato, the small rhythmic wavering of a held note, adds life and personality.`,
          `Slides, hammer-ons, pull-offs, and above all phrasing — how notes are grouped, where the silences fall, how a line breathes — are what turn scale notes into music. A great blues solo often uses very few notes, but places them with impeccable timing, space and expression, treating the guitar as a singing voice. This is why blues and rock lead playing is far more about feel and articulation than about scale knowledge: the pentatonic gives you safe notes, but bends, vibrato, phrasing and the blue note are what make those notes speak.`,
        ],
      },
      {
        heading: "Call and response, and phrasing",
        body: [
          `Blues language is deeply shaped by "call and response", a structure inherited from its African and gospel roots. A phrase (the "call") is answered by another phrase (the "response"), creating a musical conversation, often with the guitar answering a vocal line or answering itself. This gives blues and rock soloing its characteristic sense of speech-like phrasing, of statements and replies, rather than an unbroken stream of notes. Playing with space, leaving room between phrases, is essential to this conversational feel.`,
          `Learning to phrase — to think in short musical sentences with beginnings, ends and breaths, rather than running scales continuously — is the real art. The pentatonic scale is easy to play but hard to play well, precisely because good playing is about musical phrasing, not note-finding. The most revered blues and rock guitarists are masters of saying a great deal with a few well-chosen, well-articulated notes, using the pentatonic and blues scales not as exercises but as a vocabulary for expressive, conversational, deeply human musical speech.`,
        ],
      },
      {
        heading: "The sound of the guitar solo",
        body: [
          `You have heard the pentatonic and blues language in virtually every guitar solo you love — the wailing bends, the crying blue notes, the phrases that seem to speak. When a solo sounds like the guitar is singing or talking, that is expressive technique (bends, vibrato, phrasing) applied to these forgiving scales. The reason a beginner can pick up a guitar and start soloing over a blues is the pentatonic's safety; the reason a master sounds infinitely better with the same five notes is phrasing and feel. Understanding that the notes are the easy part, and that bends, vibrato, space and call-and-response are what make them music, is the key to soloing that moves people rather than just running up and down a box.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "Why is the pentatonic scale so forgiving to solo with?",
        choices: [
          { id: "a", label: "It omits the notes most likely to clash, leaving a subset that sounds consonant over a wide range of harmony" },
          { id: "b", label: "It contains every possible note" },
          { id: "c", label: "It can only be played in one key" },
          { id: "d", label: "It has no relationship to the chords" },
        ],
        correctChoiceId: "a",
        explanation: "The pentatonic's five notes leave out the ones most likely to clash, so almost any note sounds reasonable over a progression — freeing a beginner to focus on phrasing rather than avoiding wrong notes.",
      },
      {
        dimension: "depth",
        prompt: "What is a 'blue note'?",
        choices: [
          { id: "a", label: "An added, expressive flattened note (often the flat fifth) that gives the blues its aching cry" },
          { id: "b", label: "The lowest note on the guitar" },
          { id: "c", label: "Any note played on a blue guitar" },
          { id: "d", label: "The final note of a scale" },
        ],
        correctChoiceId: "a",
        explanation: "The blue note, commonly the flattened fifth added to the minor pentatonic, is a tense, unstable note deliberately used — as a passing tone or bent into — for the emotional bite and 'cry' that define blues phrasing.",
      },
      {
        dimension: "reasoning",
        prompt: "Why is string bending so central to blues and rock guitar?",
        choices: [
          { id: "a", label: "It reaches the expressive 'in-between' pitches of blue notes and gives notes a vocal, crying quality" },
          { id: "b", label: "It makes the guitar louder" },
          { id: "c", label: "It changes the guitar's tuning permanently" },
          { id: "d", label: "It removes the need for a scale" },
        ],
        correctChoiceId: "a",
        explanation: "Blues treats pitch as flexible, bending strings to reach the microtonal 'in-between' shadings of blue notes and giving notes a vocal, crying quality — the signature expressive device of the style.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can two players sound completely different using the same pentatonic notes?",
        choices: [
          { id: "a", label: "Because the difference lies in phrasing and articulation — bends, vibrato, timing and space — not the notes themselves" },
          { id: "b", label: "Because one is using a different scale secretly" },
          { id: "c", label: "Because the notes always sound identical" },
          { id: "d", label: "Because only the loudest player sounds good" },
        ],
        correctChoiceId: "a",
        explanation: "The pentatonic gives safe notes, but bends, vibrato, phrasing and space are what make notes speak; a master places few notes with impeccable feel while a beginner runs the scale — the notes are the easy part.",
      },
      {
        dimension: "depth",
        prompt: "What is 'call and response' in blues language?",
        choices: [
          { id: "a", label: "A phrase (the call) answered by another phrase (the response), creating conversational, speech-like phrasing" },
          { id: "b", label: "Playing every note twice" },
          { id: "c", label: "Tuning the guitar in pairs" },
          { id: "d", label: "A type of amplifier feedback" },
        ],
        correctChoiceId: "a",
        explanation: "Inherited from African and gospel roots, call and response answers one phrase with another, giving blues and rock soloing its conversational, statement-and-reply phrasing, with space left between phrases.",
      },
    ],
    sources: [
      { label: "Pentatonic scale (overview)", note: "Reference on major and minor pentatonic scales.", type: "Reference", url: "https://en.wikipedia.org/wiki/Pentatonic_scale" },
      { label: "Blue note (overview)", note: "Reference on blue notes and the blues scale.", type: "Reference", url: "https://en.wikipedia.org/wiki/Blue_note" },
    ],
  },
  {
    concept: "Voice Leading",
    level: "University",
    summary: "smooth movement between chord tones across changing harmony",
    estimatedMinutes: 9,
    deck: "The secret to chord changes that sound smooth, professional and inevitable is not the chords themselves but the paths the individual notes take between them. Voice leading is the art of moving each note as little as possible from one chord to the next — and it is what separates elegant harmony from a series of disconnected grips.",
    keyTerms: [
      { label: "Voice leading", value: "The smooth, efficient movement of individual notes from one chord to the next." },
      { label: "Voice", value: "An individual melodic line within the harmony, one note per chord." },
      { label: "Common tone", value: "A note shared by two consecutive chords, held in place for smoothness." },
      { label: "Stepwise motion", value: "Moving a note by a small step to the nearest note of the next chord." },
    ],
    sections: [
      {
        heading: "Chords as moving lines",
        body: [
          `Voice leading is the way individual notes move from one chord to the next as harmony changes. The key idea is to stop thinking of chords as static blocks and start hearing them as several simultaneous melodic lines — "voices" — each moving smoothly through the progression. Good voice leading moves each voice as little as possible, keeping notes common to both chords in place and moving the others to the nearest available note. The result is a smooth, connected, elegant flow between chords.`,
          `The term comes from choral and orchestral music, where each voice or instrument literally is a separate line, but the principle applies to any harmony, including guitar chords. Even when one player sounds a whole chord, the ear follows the implied individual lines within it, and how those lines move determines whether a progression sounds smooth and inevitable or jerky and disconnected. Voice leading is one of the deepest and most powerful principles in music, quietly responsible for much of what makes harmony sound "right".`,
        ],
      },
      {
        heading: "Move as little as possible",
        body: [
          `The central guideline of good voice leading is economy of motion: between two chords, keep any common tones in the same voice, and move the other voices by the smallest possible step to the nearest chord tone. If two consecutive chords share a note, hold that note; for the notes that must change, move them stepwise (by a small interval) rather than leaping. This minimises the total movement and creates the smoothest possible connection between the chords.`,
          `This is why the same two chords can sound clumsy or seamless depending on their voicings. If you play both in root position with all voices leaping to new positions, the change sounds abrupt; if you choose voicings where notes are held or move by a step, the change sounds smooth and connected. On guitar, this often means choosing chord shapes near each other on the neck, or inversions that share notes, so the change involves minimal finger movement and minimal leaping of the individual notes. Smooth voice leading is largely the art of choosing the right voicing for each chord in context.`,
        ],
      },
      {
        heading: "Guide tones and the pull of resolution",
        body: [
          `Voice leading is especially powerful with the "guide tones" of chords — the thirds and sevenths that define their quality and function. In a progression, these tones often move by just a half step or a common tone from one chord to the next, and tracing them reveals the smooth internal lines that hold a progression together. In a jazz ii–V–I, for instance, the guide tones descend in smooth steps, and voicing the chords to bring out that motion is what makes the progression sound so polished.`,
          `Voice leading also explains the pull of harmonic resolution at the level of individual notes. The tension of a dominant chord resolving to the tonic is, concretely, its leading tone rising a half step to the tonic and its seventh falling a half step, each voice moving to the nearest stable note. The satisfying "click" of resolution is the sound of these voices settling by the smallest possible steps into the restful chord. Functional harmony and voice leading are two views of the same thing: the movement of tension to rest, heard both as chords and as smoothly moving lines.`,
        ],
      },
      {
        heading: "Why it is worth the effort",
        body: [
          `Attention to voice leading is one of the clearest markers of a sophisticated musician. A songwriter or arranger who voice-leads well produces progressions that flow with a sense of inevitability, where each chord seems to melt into the next; one who ignores it produces harmony that lurches, however correct the chords may be. On guitar, players who understand voice leading can create beautiful chord melodies, smooth comping, and arrangements where inner lines move expressively beneath the harmony, rather than just strumming disconnected shapes.`,
          `Voice leading also generates melody and interest from within the harmony. A held or stepwise-moving inner voice can become a melodic line in its own right — the descending or ascending lines you hear threading through many beautiful progressions are voice leading made audible. Learning to hear and control the individual voices within your chords, rather than treating chords as monolithic grips, opens up a far richer way of playing and writing. It is challenging, because the guitar's layout makes ideal voice leading harder than on a keyboard, but it is one of the most rewarding studies in guitar harmony, transforming the smoothness and sophistication of your playing.`,
        ],
      },
      {
        heading: "Why some chord changes just flow",
        body: [
          `You feel voice leading whenever a chord change sounds especially smooth and satisfying, as if the chords were made to follow each other. That seamlessness usually comes from notes being held or moving by tiny steps between the chords, even if you never noticed the individual lines. When you hear a line threading down or up through a progression — a common and beautiful sound in ballads and hymns — that is voice leading made into melody. On guitar, the moment you choose a chord shape because it connects smoothly to the next one, holding common notes and moving others minimally, rather than jumping to a distant grip, you are voice-leading. Understanding that chords are moving lines, not static blocks, is what makes the difference between harmony that lurches and harmony that flows.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is voice leading?",
        choices: [
          { id: "a", label: "The smooth, efficient movement of individual notes from one chord to the next" },
          { id: "b", label: "Singing the lead vocal in a band" },
          { id: "c", label: "Choosing which chords to use in a key" },
          { id: "d", label: "Playing chords as loudly as possible" },
        ],
        correctChoiceId: "a",
        explanation: "Voice leading treats chords as several simultaneous melodic lines and moves each as little as possible between chords, keeping common tones and moving others to the nearest note for a smooth, connected flow.",
      },
      {
        dimension: "depth",
        prompt: "What is the central guideline of good voice leading?",
        choices: [
          { id: "a", label: "Keep common tones in place and move the other voices by the smallest possible step" },
          { id: "b", label: "Make every voice leap as far as possible" },
          { id: "c", label: "Always play chords in root position" },
          { id: "d", label: "Change every note between chords" },
        ],
        correctChoiceId: "a",
        explanation: "Economy of motion is the rule: hold any notes shared by consecutive chords, and move the others stepwise to the nearest chord tone, minimising total movement for the smoothest connection.",
      },
      {
        dimension: "reasoning",
        prompt: "Why can the same two chords sound clumsy or seamless?",
        choices: [
          { id: "a", label: "Because the voicings determine whether notes are held and move by steps, or all leap to new positions" },
          { id: "b", label: "Because the chords change identity" },
          { id: "c", label: "Because only tempo matters" },
          { id: "d", label: "Because voicing has no effect on smoothness" },
        ],
        correctChoiceId: "a",
        explanation: "Both chords played with all voices leaping sound abrupt, while voicings that hold common tones or move notes by a step sound smooth — so voice leading is largely the art of choosing the right voicing in context.",
      },
      {
        dimension: "reasoning",
        prompt: "How does voice leading explain the resolution of a dominant chord to the tonic?",
        choices: [
          { id: "a", label: "The leading tone rises a half step and the seventh falls a half step, each voice moving to the nearest stable note" },
          { id: "b", label: "All the notes leap a full octave" },
          { id: "c", label: "The chords do not actually move" },
          { id: "d", label: "The resolution has nothing to do with individual notes" },
        ],
        correctChoiceId: "a",
        explanation: "The satisfying resolution is concretely the leading tone rising and the seventh falling by half steps into the restful chord — functional harmony and voice leading are two views of the same tension-to-rest motion.",
      },
      {
        dimension: "reasoning",
        prompt: "How can voice leading generate melody from within the harmony?",
        choices: [
          { id: "a", label: "A held or stepwise-moving inner voice can become a melodic line threading through the progression" },
          { id: "b", label: "By removing all the chords" },
          { id: "c", label: "By playing only single notes" },
          { id: "d", label: "It cannot produce any melody" },
        ],
        correctChoiceId: "a",
        explanation: "The descending or ascending lines heard threading through many beautiful progressions are voice leading made audible — an inner voice moving smoothly becomes a melody in its own right beneath the harmony.",
      },
    ],
    sources: [
      { label: "Open Music Theory: voice leading", note: "Open textbook material on voice leading principles.", type: "Textbook", url: "https://openmusictheory.github.io/" },
      { label: "Voice leading (overview)", note: "Reference on smooth part-writing and common-tone motion.", type: "Reference", url: "https://en.wikipedia.org/wiki/Voice_leading" },
    ],
  },
  {
    concept: "Phrase and Form",
    level: "University",
    summary: "how musical ideas group into motives, phrases, sections and larger designs",
    estimatedMinutes: 9,
    deck: "Music, like language, is built in nested units: motives make phrases, phrases make sections, sections make whole songs. Phrase and form are how these units are organised into a coherent shape — the architecture that turns a stream of notes into a piece you can follow, remember and be moved by.",
    keyTerms: [
      { label: "Motive", value: "A short, memorable musical idea — the smallest building block of a piece." },
      { label: "Phrase", value: "A complete musical thought, like a sentence, usually ending in a cadence." },
      { label: "Form", value: "The overall structure of a piece — how its sections are arranged." },
      { label: "Song forms", value: "Common structures like verse-chorus, 12-bar blues, or AABA." },
    ],
    sections: [
      {
        heading: "Music built in units",
        body: [
          `Music is organised hierarchically, much like language. The smallest meaningful unit is the motive: a short, distinctive musical idea, a few notes or a rhythm, that serves as a building block and is often repeated and developed throughout a piece — think of the famous four-note opening of Beethoven's Fifth Symphony. Motives combine into phrases, which are complete musical thoughts, the equivalent of sentences, usually ending with a cadence that punctuates them. Phrases group into larger sections, and sections into the whole piece.`,
          `This nested structure is what gives music coherence and makes it possible to follow and remember. Just as a paragraph is more than random words, a piece of music is more than random notes; it is a designed architecture of related ideas at multiple levels. Understanding phrase and form means hearing this architecture — recognising when an idea returns, when a new section begins, how the parts relate to the whole — which transforms listening from a moment-to-moment experience into an appreciation of the overall design.`,
        ],
      },
      {
        heading: "Phrases and their answers",
        body: [
          `The phrase is the fundamental unit of musical thought, and phrases are often organised into satisfying question-and-answer pairs. A common structure pairs an "antecedent" phrase, which ends inconclusively (often on a half cadence, leaving the music open), with a "consequent" phrase, which answers it and ends conclusively (on an authentic cadence, closing the thought). This antecedent-consequent structure creates a balanced, speech-like unit — a musical sentence with a question and a resolving answer — that is deeply satisfying and pervades music of all kinds.`,
          `Hearing music in phrases, rather than as an unbroken stream, is central to both understanding and performing it. A musician who feels the phrase structure knows where the music breathes, where to shape a crescendo toward a phrase's peak, and where a thought ends and another begins. Phrasing — the art of shaping music according to its phrase structure — is what makes a performance sound musical and expressive rather than mechanical. Even in improvisation, thinking in phrases, with beginnings, ends and breaths, is what separates coherent musical statements from aimless running of notes.`,
        ],
      },
      {
        heading: "Common song forms",
        body: [
          `At the largest level, sections are arranged into forms, and popular music uses a handful of recurring designs. The verse-chorus form, the backbone of most pop and rock, alternates verses (which advance the story, with changing lyrics) and a repeating chorus (the memorable, emotional high point), often with a contrasting bridge for variety. The 12-bar blues is a specific, tightly defined harmonic form of twelve measures using the I, IV and V chords in a set pattern, the foundation of blues and much early rock. The AABA form, common in jazz standards and older pop, states a main section (A) twice, introduces a contrasting bridge (B), then returns to A.`,
          `These forms are shared conventions that shape both writing and listening. Knowing a song's form lets you anticipate where it is going — when the chorus will hit, when the bridge will provide contrast — and gives songs their satisfying sense of structure, repetition and return. Composers work with these forms, fulfilling and sometimes subverting expectations, and understanding them lets you grasp how a song is built and why it holds together. Form is the large-scale architecture within which all the smaller musical events take place.`,
        ],
      },
      {
        heading: "Repetition, contrast and return",
        body: [
          `Underlying all musical form are a few fundamental principles: repetition, contrast, and return (or variation). Repetition — restating an idea — creates unity, familiarity and memorability; it is why choruses repeat and motives recur. Contrast — introducing something different, like a bridge or a new section — creates variety and prevents monotony, providing relief and freshness. Return — bringing back an earlier idea after a contrast — creates a satisfying sense of coherence, resolution and homecoming, the feeling of things coming full circle.`,
          `Nearly all musical forms are built from the interplay of these three. Too much repetition is monotonous; too much contrast is incoherent; the art is in the balance, and in the satisfying return of familiar material after contrast. This is why the return of a chorus, or of a main theme after a departure, feels so good: it is the resolution of the tension between familiarity and novelty. Understanding form as the management of repetition, contrast and return reveals the deep logic behind why well-structured music feels balanced and complete, and gives a writer the principles to build music with a satisfying overall shape.`,
        ],
      },
      {
        heading: "Why you know when the chorus is coming",
        body: [
          `You understand musical form intuitively every time you anticipate a song's structure — sensing when the chorus is about to hit, feeling the bridge provide a fresh contrast, enjoying the satisfying return to a familiar section. When a catchy hook lodges in your head, that is a motive doing its job; when a song feels balanced and complete, that is form managing repetition, contrast and return. On guitar, structuring a solo or a piece into phrases with clear beginnings and ends, and building a song from verses, choruses and a bridge, is working with phrase and form directly. Recognising that music is nested units — motives within phrases within sections within a whole — turns you from someone who plays notes into someone who shapes music with architecture, coherence and meaning.`,
        ],
      },
    ],
    questions: [
      {
        dimension: "depth",
        prompt: "What is a 'motive' in music?",
        choices: [
          { id: "a", label: "A short, distinctive musical idea that serves as a building block, often repeated and developed" },
          { id: "b", label: "The reason a composer wrote a piece" },
          { id: "c", label: "A complete song" },
          { id: "d", label: "The final chord of a phrase" },
        ],
        correctChoiceId: "a",
        explanation: "A motive is the smallest meaningful unit — a few notes or a rhythm, like the opening of Beethoven's Fifth — that acts as a building block and is developed throughout a piece.",
      },
      {
        dimension: "depth",
        prompt: "What is a musical 'phrase'?",
        choices: [
          { id: "a", label: "A complete musical thought, like a sentence, usually ending in a cadence" },
          { id: "b", label: "A single note held for a long time" },
          { id: "c", label: "The name of a chord" },
          { id: "d", label: "The tempo of a piece" },
        ],
        correctChoiceId: "a",
        explanation: "A phrase is a complete musical thought — the equivalent of a sentence — made of motives and usually ending with a cadence that punctuates it, the fundamental unit of musical thought.",
      },
      {
        dimension: "reasoning",
        prompt: "What is an antecedent-consequent phrase structure?",
        choices: [
          { id: "a", label: "A 'question' phrase ending inconclusively paired with an 'answer' phrase ending conclusively" },
          { id: "b", label: "Two identical phrases in a row" },
          { id: "c", label: "A phrase with no cadence" },
          { id: "d", label: "A phrase played twice as fast" },
        ],
        correctChoiceId: "a",
        explanation: "The antecedent ends openly (often on a half cadence) and the consequent answers it, ending conclusively (on an authentic cadence) — a balanced, speech-like question-and-answer musical sentence.",
      },
      {
        dimension: "depth",
        prompt: "What defines the 12-bar blues form?",
        choices: [
          { id: "a", label: "A specific 12-measure harmonic pattern using the I, IV and V chords" },
          { id: "b", label: "Any song lasting 12 minutes" },
          { id: "c", label: "A verse repeated 12 times" },
          { id: "d", label: "A scale with 12 notes" },
        ],
        correctChoiceId: "a",
        explanation: "The 12-bar blues is a tightly defined harmonic form of twelve measures using the I, IV and V chords in a set pattern — the foundation of blues and much early rock.",
      },
      {
        dimension: "reasoning",
        prompt: "What three principles underlie nearly all musical form?",
        choices: [
          { id: "a", label: "Repetition (unity), contrast (variety) and return (coherence)" },
          { id: "b", label: "Speed, volume and pitch" },
          { id: "c", label: "Major, minor and diminished" },
          { id: "d", label: "Verse, chorus and solo only" },
        ],
        correctChoiceId: "a",
        explanation: "Form balances repetition (creating unity and memorability), contrast (providing variety and relief), and return (bringing back earlier material for coherence and a satisfying homecoming).",
      },
    ],
    sources: [
      { label: "Open Music Theory: form and phrase", note: "Open textbook material on phrases, cadences and musical form.", type: "Textbook", url: "https://openmusictheory.github.io/" },
      { label: "Musical form (overview)", note: "Reference on motives, phrases, sections and song forms.", type: "Reference", url: "https://en.wikipedia.org/wiki/Musical_form" },
    ],
  },
];

export const musicTheoryLessons = buildAuthoredLessons("music-theory", musicTheory);
