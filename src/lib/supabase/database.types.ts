export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          activity_type: string | null;
          avg_hr: number | null;
          calories: number | null;
          created_at: string;
          date: string;
          distance_km: number | null;
          duration_minutes: number | null;
          id: string;
          max_hr: number | null;
          notes: string | null;
          external_id: string | null;
          source: string;
          synced_at: string | null;
          training_effect: string | null;
          user_id: string;
        };
        Insert: {
          activity_type?: string | null;
          avg_hr?: number | null;
          calories?: number | null;
          created_at?: string;
          date: string;
          distance_km?: number | null;
          duration_minutes?: number | null;
          id?: string;
          max_hr?: number | null;
          notes?: string | null;
          external_id?: string | null;
          source?: string;
          synced_at?: string | null;
          training_effect?: string | null;
          user_id: string;
        };
        Update: {
          activity_type?: string | null;
          avg_hr?: number | null;
          calories?: number | null;
          created_at?: string;
          date?: string;
          distance_km?: number | null;
          duration_minutes?: number | null;
          id?: string;
          max_hr?: number | null;
          notes?: string | null;
          external_id?: string | null;
          source?: string;
          synced_at?: string | null;
          training_effect?: string | null;
          user_id?: string;
        };
        Relationships: [];
      };
      strava_connections: {
        Row: {
          access_token: string;
          athlete_id: number | null;
          athlete_name: string | null;
          created_at: string;
          expires_at: number;
          id: string;
          last_sync_at: string | null;
          refresh_token: string;
          scope: string | null;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          access_token: string;
          athlete_id?: number | null;
          athlete_name?: string | null;
          created_at?: string;
          expires_at: number;
          id?: string;
          last_sync_at?: string | null;
          refresh_token: string;
          scope?: string | null;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          access_token?: string;
          athlete_id?: number | null;
          athlete_name?: string | null;
          created_at?: string;
          expires_at?: number;
          id?: string;
          last_sync_at?: string | null;
          refresh_token?: string;
          scope?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      garmin_sync_runs: {
        Row: {
          activities_upserted: number;
          created_at: string;
          finished_at: string | null;
          fitness_days_upserted: number;
          id: string;
          lookback_days: number | null;
          message: string | null;
          started_at: string;
          status: string;
          user_id: string;
        };
        Insert: {
          activities_upserted?: number;
          created_at?: string;
          finished_at?: string | null;
          fitness_days_upserted?: number;
          id?: string;
          lookback_days?: number | null;
          message?: string | null;
          started_at?: string;
          status: string;
          user_id: string;
        };
        Update: {
          activities_upserted?: number;
          created_at?: string;
          finished_at?: string | null;
          fitness_days_upserted?: number;
          id?: string;
          lookback_days?: number | null;
          message?: string | null;
          started_at?: string;
          status?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      consultant_readiness_logs: {
        Row: {
          communication_practice_minutes: number | null;
          created_at: string;
          date: string;
          id: string;
          industry_learning_minutes: number | null;
          notes: string | null;
          structured_thinking_reps: number | null;
          user_id: string;
          writing_minutes: number | null;
        };
        Insert: {
          communication_practice_minutes?: number | null;
          created_at?: string;
          date: string;
          id?: string;
          industry_learning_minutes?: number | null;
          notes?: string | null;
          structured_thinking_reps?: number | null;
          user_id: string;
          writing_minutes?: number | null;
        };
        Update: {
          communication_practice_minutes?: number | null;
          created_at?: string;
          date?: string;
          id?: string;
          industry_learning_minutes?: number | null;
          notes?: string | null;
          structured_thinking_reps?: number | null;
          user_id?: string;
          writing_minutes?: number | null;
        };
        Relationships: [];
      };
      daily_logs: {
        Row: {
          created_at: string;
          date: string;
          deep_work_hours: number | null;
          french_minutes: number | null;
          id: string;
          mood_score: number | null;
          notes: string | null;
          reading_pages: number | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          date: string;
          deep_work_hours?: number | null;
          french_minutes?: number | null;
          id?: string;
          mood_score?: number | null;
          notes?: string | null;
          reading_pages?: number | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          date?: string;
          deep_work_hours?: number | null;
          french_minutes?: number | null;
          id?: string;
          mood_score?: number | null;
          notes?: string | null;
          reading_pages?: number | null;
          user_id?: string;
        };
        Relationships: [];
      };
      daily_routine_logs: {
        Row: {
          completed: boolean;
          created_at: string;
          date: string;
          id: string;
          routine_key: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          completed?: boolean;
          created_at?: string;
          date: string;
          id?: string;
          routine_key: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          completed?: boolean;
          created_at?: string;
          date?: string;
          id?: string;
          routine_key?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      finance_snapshots: {
        Row: {
          cash_gbp: number | null;
          created_at: string;
          date: string;
          id: string;
          invested_gbp: number | null;
          isa_gbp: number | null;
          lifetime_isa_gbp: number | null;
          net_worth_change_percent: number | null;
          net_worth_gbp: number | null;
          user_id: string;
        };
        Insert: {
          cash_gbp?: number | null;
          created_at?: string;
          date: string;
          id?: string;
          invested_gbp?: number | null;
          isa_gbp?: number | null;
          lifetime_isa_gbp?: number | null;
          net_worth_change_percent?: number | null;
          net_worth_gbp?: number | null;
          user_id: string;
        };
        Update: {
          cash_gbp?: number | null;
          created_at?: string;
          date?: string;
          id?: string;
          invested_gbp?: number | null;
          isa_gbp?: number | null;
          lifetime_isa_gbp?: number | null;
          net_worth_change_percent?: number | null;
          net_worth_gbp?: number | null;
          user_id?: string;
        };
        Relationships: [];
      };
      portfolio_accounts: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          provider: string | null;
          type: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          provider?: string | null;
          type: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          provider?: string | null;
          type?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      portfolio_holdings: {
        Row: {
          account_id: string;
          auto_price_updates: boolean;
          created_at: string;
          currency: string;
          exchange: string | null;
          fund_name: string | null;
          id: string;
          ticker: string | null;
          units: number;
        };
        Insert: {
          account_id: string;
          auto_price_updates?: boolean;
          created_at?: string;
          currency?: string;
          exchange?: string | null;
          fund_name?: string | null;
          id?: string;
          ticker?: string | null;
          units?: number;
        };
        Update: {
          account_id?: string;
          auto_price_updates?: boolean;
          created_at?: string;
          currency?: string;
          exchange?: string | null;
          fund_name?: string | null;
          id?: string;
          ticker?: string | null;
          units?: number;
        };
        Relationships: [
          {
            foreignKeyName: "portfolio_holdings_account_id_fkey";
            columns: ["account_id"];
            isOneToOne: false;
            referencedRelation: "portfolio_accounts";
            referencedColumns: ["id"];
          },
        ];
      };
      market_prices: {
        Row: {
          currency: string;
          price: number;
          ticker: string;
          updated_at: string;
        };
        Insert: {
          currency?: string;
          price: number;
          ticker: string;
          updated_at?: string;
        };
        Update: {
          currency?: string;
          price?: number;
          ticker?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      net_worth_snapshots: {
        Row: {
          cash_value: number | null;
          created_at: string;
          date: string;
          estimated_net_worth: number | null;
          id: string;
          invested_value: number | null;
          user_id: string;
        };
        Insert: {
          cash_value?: number | null;
          created_at?: string;
          date: string;
          estimated_net_worth?: number | null;
          id?: string;
          invested_value?: number | null;
          user_id: string;
        };
        Update: {
          cash_value?: number | null;
          created_at?: string;
          date?: string;
          estimated_net_worth?: number | null;
          id?: string;
          invested_value?: number | null;
          user_id?: string;
        };
        Relationships: [];
      };
      fitness_metrics: {
        Row: {
          created_at: string;
          date: string;
          hrv: number | null;
          id: string;
          resting_hr: number | null;
          sleep_hours: number | null;
          sleep_score: number | null;
          training_load: number | null;
          training_status: string | null;
          user_id: string;
          weekly_distance_km: number | null;
        };
        Insert: {
          created_at?: string;
          date: string;
          hrv?: number | null;
          id?: string;
          resting_hr?: number | null;
          sleep_hours?: number | null;
          sleep_score?: number | null;
          training_load?: number | null;
          training_status?: string | null;
          user_id: string;
          weekly_distance_km?: number | null;
        };
        Update: {
          created_at?: string;
          date?: string;
          hrv?: number | null;
          id?: string;
          resting_hr?: number | null;
          sleep_hours?: number | null;
          sleep_score?: number | null;
          training_load?: number | null;
          training_status?: string | null;
          user_id?: string;
          weekly_distance_km?: number | null;
        };
        Relationships: [];
      };
      quests: {
        Row: {
          category: string | null;
          created_at: string;
          current_value: number | null;
          deadline: string | null;
          id: string;
          status: string | null;
          target_metric: string | null;
          target_value: number | null;
          title: string;
          user_id: string;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          current_value?: number | null;
          deadline?: string | null;
          id?: string;
          status?: string | null;
          target_metric?: string | null;
          target_value?: number | null;
          title: string;
          user_id: string;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          current_value?: number | null;
          deadline?: string | null;
          id?: string;
          status?: string | null;
          target_metric?: string | null;
          target_value?: number | null;
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type DailyLog = Database["public"]["Tables"]["daily_logs"]["Row"];
export type DailyRoutineLog =
  Database["public"]["Tables"]["daily_routine_logs"]["Row"];
export type Activity = Database["public"]["Tables"]["activities"]["Row"];
export type StravaConnection =
  Database["public"]["Tables"]["strava_connections"]["Row"];
export type GarminSyncRun =
  Database["public"]["Tables"]["garmin_sync_runs"]["Row"];
export type ConsultantReadinessLog =
  Database["public"]["Tables"]["consultant_readiness_logs"]["Row"];
export type FinanceSnapshot =
  Database["public"]["Tables"]["finance_snapshots"]["Row"];
export type FitnessMetric =
  Database["public"]["Tables"]["fitness_metrics"]["Row"];
export type PortfolioAccount =
  Database["public"]["Tables"]["portfolio_accounts"]["Row"];
export type PortfolioHolding =
  Database["public"]["Tables"]["portfolio_holdings"]["Row"];
export type MarketPrice = Database["public"]["Tables"]["market_prices"]["Row"];
export type NetWorthSnapshot =
  Database["public"]["Tables"]["net_worth_snapshots"]["Row"];
export type Quest = Database["public"]["Tables"]["quests"]["Row"];
