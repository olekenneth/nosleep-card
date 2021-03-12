import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'nosleep-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface NoSleepCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity?: string;
  tap_action?: ActionConfig;
}
