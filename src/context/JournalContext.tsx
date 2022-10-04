import React, { createContext, useState } from 'react';
import { Entry } from '../interfaces/entry.interface';
import { Journal } from '../interfaces/journal.interface';

type IJournalContext = {
  journalName: string;
  setJournalName: (event: string) => void;
  entries: Entry[];
  setJournals: (event: Journal[]) => void;
  setEntries: (event: Entry[]) => void;
  journals: Journal[];
};

const defaultContext: IJournalContext = {
  setJournals: () => {},
  journalName: '',
  setEntries: () => {},
  entries: [],
  setJournalName: () => {},
  journals: [],
};

export const JournalContext = createContext<IJournalContext>(defaultContext);

export const JournalProvider: React.FC = ({ children }) => {
  const [entries, setEntries] = useState(defaultContext.entries);
  const [journalName, setJournalName] = useState(defaultContext.journalName);
  const [journals, setJournals] = useState(defaultContext.journals);

  return (
    <JournalContext.Provider
      value={{
        journals,
        journalName,
        setJournalName,
        entries,
        setJournals,
        setEntries,
      }}
    >
      {children}
    </JournalContext.Provider>
  );
};
