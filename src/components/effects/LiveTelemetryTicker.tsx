import React, { useState, useEffect } from 'react';
import styles from './LiveTelemetryTicker.module.css';

export const LiveTelemetryTicker: React.FC = () => {
  const [timestamp, setTimestamp] = useState<string>('');
  const [processedTx, setProcessedTx] = useState<number>(2419820);
  const [latency, setLatency] = useState<number>(38);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    const txInterval = setInterval(() => {
      setProcessedTx((prev) => prev + Math.floor(Math.random() * 8 + 3));
      setLatency(36 + Math.floor(Math.random() * 6));
    }, 1800);

    return () => {
      clearInterval(timeInterval);
      clearInterval(txInterval);
    };
  }, []);

  return (
    <div className={styles.tickerBar} aria-label="Incident Room Realtime Telemetry">
      <div className={styles.tickerGroup}>
        <div className={styles.tickerItem}>
          <span className={styles.pulseDot} />
          <span className={styles.itemLabel}>TELEMETRY:</span>
          <span className={styles.itemValueHealth}>LIVE STREAMING</span>
        </div>

        <div className={styles.tickerItem}>
          <span className={styles.itemLabel}>TIMESTAMP:</span>
          <span className={styles.itemValue}>{timestamp}</span>
        </div>

        <div className={styles.tickerItem}>
          <span className={styles.itemLabel}>TRANSACTIONS PROCESSED:</span>
          <span className={styles.itemValueAccent}>{processedTx.toLocaleString()}</span>
        </div>
      </div>

      <div className={styles.tickerGroup}>
        <div className={styles.tickerItem}>
          <span className={styles.itemLabel}>CLUSTER:</span>
          <span className={styles.itemValue}>SERVICE FABRIC (12/12 NODES)</span>
        </div>

        <div className={styles.tickerItem}>
          <span className={styles.itemLabel}>LATENCY (p99):</span>
          <span className={styles.itemValueHealth}>{latency}ms</span>
        </div>

        <div className={styles.tickerItem}>
          <span className={styles.itemLabel}>SECURITY:</span>
          <span className={styles.itemValue}>TLS 1.3 · ZERO FAILS</span>
        </div>
      </div>
    </div>
  );
};
