import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

import StudentCard from './StudentCard';

const STUDENTS = [
  {
    id: 's1',
    name: 'Ana Cruz',
    year: '3rd Year',
    photoUrl: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 's2',
    name: 'Bea Santos',
    year: '2nd Year',
    photoUrl: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 's3',
    name: 'Cid Ramos',
    year: '4th Year',
    photoUrl: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: 's4',
    name: 'Dex Alonzo',
    year: '1st Year',
    photoUrl: 'https://i.pravatar.cc/100?img=4',
  },
  {
    id: 's5',
    name: 'Eli Tan',
    year: '3rd Year',
    photoUrl: 'https://i.pravatar.cc/100?img=5',
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(
    STUDENTS.map((student) => ({
      ...student,
      flagged: false,
    }))
  );

  const [query, setQuery] = useState('');

  const visibleStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  const toggleFlag = (id) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Directory</Text>

        <Text style={styles.subtitle}>
          {students.length} students this term
        </Text>
      </View>

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.search}
          placeholder="Search students..."
          placeholderTextColor="#8a8aa5"
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {visibleStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={() => toggleFlag(student.id)}
          />
        ))}

        {visibleStudents.length === 0 && (
          <Text style={styles.empty}>
            No students match that search.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6f5fc',
  },

  header: {
    backgroundColor: '#1e1a5c',
    paddingTop: 56,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },

  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },

  subtitle: {
    color: '#c9c7ec',
    fontSize: 12,
    marginTop: 2,
  },

  searchWrap: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  search: {
    backgroundColor: '#ebe9f8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d8d5ef',
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#1b1b2f',
  },

  list: {
    padding: 16,
  },

  empty: {
    textAlign: 'center',
    color: '#6b6b80',
    marginTop: 24,
  },
});