/* askcarnivores.com — the ask panel (Concept Base v3.1 §16)
   ------------------------------------------------------------------
   The first JavaScript on this site, and it stays the smallest thing that
   can do the job: open a panel, put the bot's public /embed page in it,
   close it again.

   THE RULE THIS FILE EXISTS TO KEEP: it never fetches the bot's worker.
   The portal is a window onto the bot, not a client of it — the moment
   anything here calls an endpoint, the two repos are coupled and the
   siloing rule is gone. One URL, in a frame. That is the whole contract.

   Progressive enhancement: in the HTML the launcher and the banner button
   are ordinary links to askcarnivore.com. If this file fails to load, or
   the CSP blocks it, both still work — with the page load §16 wants to
   avoid, but nobody is stranded.
   ------------------------------------------------------------------ */

(function () {
  'use strict';

  var EMBED = 'https://askcarnivore.com/embed';

  var root = document.documentElement;
  var panel = document.getElementById('ask-panel');
  var frame = document.getElementById('ask-frame');
  var closeBtn = document.getElementById('ask-close');
  var backdrop = document.getElementById('ask-backdrop');

  if (!panel || !frame || !closeBtn || !backdrop) return;

  /* Everything outside the panel, made inert while it is open. A real focus
     trap cannot see into a cross-origin frame, so instead of fighting the
     boundary we take the rest of the page out of the tab order entirely —
     which is also what a screen reader needs to hear. */
  var outside = [].slice.call(
    document.querySelectorAll('.site-header, main, .site-footer, .status, .ask-launcher')
  );

  var opener = null;

  function open(trigger) {
    /* Lazy-load, once. Before the first press the frame has no src, so a
       visitor who never asks never pays for the bot — on a phone, on an old
       machine, on a metered connection. */
    if (!frame.getAttribute('src')) frame.setAttribute('src', EMBED);

    opener = trigger || null;
    root.classList.add('ask-open');
    panel.removeAttribute('aria-hidden');
    outside.forEach(function (el) { el.setAttribute('inert', ''); });
    closeBtn.focus();
  }

  function close() {
    /* The src is deliberately NOT cleared. Close, reopen, and the
       conversation is still there — for someone who shut the panel by
       accident, wiping the thread is the worst thing we could do. */
    root.classList.remove('ask-open');
    panel.setAttribute('aria-hidden', 'true');
    outside.forEach(function (el) { el.removeAttribute('inert'); });
    if (opener) opener.focus();
    opener = null;
  }

  /* One delegated listener for every entry point: the floating launcher and
     the "Just Ask" button in the banner both carry data-ask, and so will
     anything added later. */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest ? e.target.closest('[data-ask]') : null;
    if (!trigger) return;
    e.preventDefault();
    open(trigger);
  });

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('ask-open')) close();
  });
}());
