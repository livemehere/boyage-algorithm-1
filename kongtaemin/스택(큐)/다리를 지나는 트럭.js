function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = [];

  // 다리에는 최대 길이만큼 트럭이 동시에 올라갈 수 있고,
  // 특정 무게 이하까지만 트럭이 동시에 올라갈 수 있다. but 완전히오르지 않은 트럭의 무게는 무시한다.
  truck_weights = truck_weights.map((t) => [t, 0]);

  while (true) {
    answer++;

    if (truck_weights.length > 0 && canGo(truck_weights[0])) {
      bridge.push(truck_weights.shift());
    }

    if (truck_weights.length === 0 && bridge.length === 0) break;
    bridgeUpdate();
  }

  // 브릿지의 길이 와 무게를 판단
  function canGo(truck) {
    const totalWeight = bridge.reduce((acc, cur) => acc + cur[0], 0) + truck[0];
    if (bridge.length + 1 <= bridge_length && totalWeight <= weight) {
      return true;
    }
    return false;
  }
  function bridgeUpdate() {
    bridge = bridge.map((truck) => [truck[0], truck[1] + 1]);
    if (!bridge) reutrn;
    if (bridge[0][1] === bridge_length) {
      bridge.shift();
    }
  }

  // Q. 모든 트럭이 다리를 다 거너는데 걸리는 초?
  return answer;
}
