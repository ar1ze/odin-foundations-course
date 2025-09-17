### Knowledge Check Answers 🎯

---

#### Question: Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

**Answer:** The rule that uses **one class selector** has the higher specificity.

**Why:** CSS calculates specificity based on a hierarchy of selector types, not just the number of selectors. A single class selector is considered more specific and therefore more powerful than any number of type (or element) selectors.

**Example:** The selector `.info-box` will override the selector `body div p`, even though the second one is longer. If both rules targeted the same `<p>` element, the styles from `.info-box` would win.

**Remember:** Think of it like a points system where selector types have different values. The basic order is **ID > Class > Type**. An ID always beats any number of classes, and a class always beats any number of types.