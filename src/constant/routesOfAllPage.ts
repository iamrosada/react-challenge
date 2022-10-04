enum RoutesOfAllPage {
  SignUp = '/signup',
  CreateJournal = '/journals/create',
  JournalEntries = '/journals/entries',
  CreateJournalPost = 'journals/entries/create',
  CreateNotes = "/journals/entries/journal/:id/posts",
  NotesListItem = "/journal/:id/posts"
}
export { RoutesOfAllPage }