export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId.replace(/^#/, ''));
  if (element) {
    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navOffset,
      behavior: 'smooth',
    });
  }
}
