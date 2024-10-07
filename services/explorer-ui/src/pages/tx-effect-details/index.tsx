import { useParams } from "@tanstack/react-router";
import { useState, type FC } from "react";
import { KeyValueDisplay } from "~/components/info-display/key-value-display";
import { Button } from "~/components/ui";
import { useGetTxEffectByHash } from "~/hooks/";
import { API_URL, aztecExplorer } from "~/service/constants";
import { txEffectTabs, type TabId } from "./constants";
import { getTxEffectData } from "./utils";

const API_ENDPOINT_URL = `${API_URL}/${aztecExplorer.getL2TxEffectByHash}`;

export const TxEffectDetails: FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>("ecryptedLogs");
  const { txHash } = useParams({
    from: "/tx-effects/$txHash",
  });
  const { data: txEffects, isLoading, error } = useGetTxEffectByHash(txHash);

  if (!txHash) <div> No txEffect hash</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!txEffects) return <div>No data</div>;

  const apiEndpointUrl = `${API_ENDPOINT_URL}${txHash}`;

  return (
    <div className="mx-auto px-[70px] max-w-[1440px]">
      <div>
        <div>
          <h2>TxEffect details</h2>
          <p>{txEffects.txHash}</p>
          <a href={apiEndpointUrl} target="_blank" rel="noreferrer">
            (API Endpoint)
          </a>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <KeyValueDisplay data={getTxEffectData(txEffects)} />
          </div>
          <div className="flex flex-row gap-4 w-10 mb-4">
            {txEffectTabs.map((tab) => (
              <Button
                key={tab.id}
                variant="primary"
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            {selectedTab === "ecryptedLogs" && (
              <div className="">
                {txEffects.encryptedLogs.functionLogs.map(
                  (encryption, index) => {
                    const entries = encryption.logs.map((log) => {
                      return Object.entries(log).map(([key, value]) => ({
                        label: key,
                        value: value,
                        isClickable: false,
                      }));
                    });
                    // Flatten the nested arrays
                    const flattenedEntries = entries.flat();

                    // Render KeyValueDisplay with the flattened entries
                    return (
                      <div key={index}>
                        <h3>Log {index + 1}</h3>
                        <KeyValueDisplay key={index} data={flattenedEntries} />
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTab === "unencryptedLogs" && (
              <div className="">
                {txEffects.unencryptedLogs.functionLogs.map(
                  (unencrypted, index) => {
                    const entries = unencrypted.logs.map((log) => {
                      return Object.entries(log).map(([key, value]) => ({
                        label: key,
                        value: value,
                        isClickable: false,
                      }));
                    });
                    // Flatten the nested arrays
                    const flattenedEntries = entries.flat();

                    // Render KeyValueDisplay with the flattened entries
                    return (
                      <div key={index}>
                        <h3>Log {index + 1}</h3>
                        <KeyValueDisplay key={index} data={flattenedEntries} />
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTab === "nullifiers" && (
              <div className="">
                {txEffects.nullifiers.map((nullifier) => (
                  <KeyValueDisplay
                    data={[{ label: "Nullifier", value: nullifier }]}
                  />
                ))}
              </div>
            )}
            {selectedTab === "noteEncryptedLogs" && (
              <div className="flex flex-col gap-4 w-10 mb-4">
                {txEffects.noteEncryptedLogs.functionLogs.map(
                  (noteEncryptedLogs, index) => {
                    const entries = noteEncryptedLogs.logs.map((log) => {
                      return Object.entries(log).map(([key, value]) => ({
                        label: key,
                        value: value,
                        isClickable: false,
                      }));
                    });
                    // Flatten the nested arrays
                    const flattenedEntries = entries.flat();

                    // Render KeyValueDisplay with the flattened entries
                    return (
                      <div key={index}>
                        <h3>Log {index + 1}</h3>
                        <KeyValueDisplay key={index} data={flattenedEntries} />
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTab === "noteHashes" && (
              <div className="">
                {txEffects.noteHashes.map((nullifier) => (
                  <KeyValueDisplay
                    data={[{ label: "Note Hashes", value: nullifier }]}
                  />
                ))}
              </div>
            )}
            {selectedTab === "l2ToL1Msgs" && (
              <div className="">
                {txEffects.l2ToL1Msgs.map((nullifier) => (
                  <KeyValueDisplay
                    data={[{ label: "L2 to L1 Messages", value: nullifier }]}
                  />
                ))}
              </div>
            )}
            {selectedTab === "publicDataWrites" && (
              <div className="flex flex-col gap-19 w-auto mb-4">
                {txEffects.publicDataWrites.map((publicDataWrite, index) => (
                  <div key={index}>
                    <h4>Write {index + 1}</h4>
                    <KeyValueDisplay
                      data={[
                        {
                          label: "leafIndex",
                          value: publicDataWrite.leafIndex,
                        },
                        {
                          label: "newValue",
                          value: publicDataWrite.newValue,
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};