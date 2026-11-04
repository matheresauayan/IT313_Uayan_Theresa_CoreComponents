import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      <Pressable
        onPress={onToggleFlag}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flagButtonActive,
          pressed && styles.flagButtonPressed,
        ]}
      >
        <Text
          style={[
            styles.flagText,
            flagged && styles.flagTextActive,
          ]}
        >
          {flagged ? '★ Flagged' : '☆ Flag'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5e3f3',
    padding: 14,
    marginBottom: 12,
  },

  photo: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1b1b2f',
  },

  year: {
    fontSize: 13,
    color: '#6b6b80',
    marginTop: 2,
  },

  flagButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4a4a8a',
    backgroundColor: '#ffffff',
  },

  flagButtonActive: {
    backgroundColor: '#d4900a',
    borderColor: '#d4900a',
  },

  flagButtonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },

  flagText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4a4a8a',
  },

  flagTextActive: {
    color: '#ffffff',
  },
});