import { main } from '../src';

test('USP-S The Traitor', () => {
    // !gen 61 1040 1 0.001 0 0 0 0 0 0 0 0
    // steam://rungame/730/76561202255233023/+csgo_econ_action_preview 00183D209008280038EFA48CD40340018052692E
    const result = main(61, 1040, 1, 0.001);
    expect(result).toBe("00183D209008280038EFA48CD40340018052692E");
});

test('AK-47 Case Hardened', () => {
    // !gen 7 44 661 0.25 0 0 0 0 0 0 0 0
    // steam://rungame/730/76561202255233023/+csgo_econ_action_preview 001807202C280538808080F403409505480050B90A5A0367656D9A98C3B8
    // steam://rungame/730/76561202255233023/+csgo_econ_action_preview 001807202C280538808080F403409505CCBBC5DC
    const result = main(7, 44, 661, 0.25, 5);
    expect(result).toBe("001807202C280538808080F403409505CCBBC5DC");
});
